const express = require('express');
const Con_finance = require('../models/con_finance');

const router = express.Router();

//save contract finances

router.post('/contract_f/save',(req,res)=>{

    let newCon_finance = new Con_finance(req.body);

    newCon_finance.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Contract finance saved successfully"
        });
    });

});

//get contract finances
router.get('/contract_finances/view',(req,res)=>{
    Con_finance.find().exec((err,con_finances)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCon_finance:con_finances
        });
    });
});

//update contract finances
router.patch('/contract_finance/update/:id',(req,res)=>{
    Con_finance.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,con_finances)=>{
            if(err){
                return res.status(400).json({error:err})
            }
            return res.status(200).json({
                success:"Updated conract finance successfuly"
            });
        }
    );
});



//delete record
router.delete('/contract_finance/:id',(req,res)=>{
    Con_finance.findByIdAndRemove(req.params.id).exec((err,deleteCon_finance)=>{
        
        if(err) return res.status(400).json({
            message:"delete unsuccessful",err
        });

        return res.json({
            message:"delete successful",deleteCon_finance
        });

    });
});


//get a specific record

router.get(`/contract_finance_one/:id` ,(req,res) =>{

    let con_financeId = req.params.id;

    Con_finance.findById(con_financeId,(err,con_finance)=>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            con_finance
        })
    });
})

















module.exports = router;