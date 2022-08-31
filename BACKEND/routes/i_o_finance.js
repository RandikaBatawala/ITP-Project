const express = require('express');
const I_O_finance = require('../models/i_o_finance');

const router = express.Router();

//save I_O_finance


router.post('/in_out_f/save',(req,res)=>{

    let newI_O_finance = new I_O_finance(req.body);

    newI_O_finance.save((err)=>{
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
router.get('/i_o_finances/view',(req,res)=>{
    I_O_finance.find().exec((err,i_o_finances)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingI_O_finance:i_o_finances
        });
    });
});

//update contract finances
router.put('/i_o_finances/update/:id',(req,res)=>{
    I_O_finance.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,i_o_finances)=>{
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
router.delete('/i_o_finances/delete/:id',(req,res)=>{
    I_O_finance.findByIdAndRemove(req.params.id).exec((err,deleteI_O_finance)=>{
        
        if(err) return res.status(400).json({
            message:"delete unsuccessful",err
        });

        return res.json({
            message:"delete successful",deleteI_O_finance
        });

    });
});



//get a specific record

router.get("/i_o_finance_one/:id" ,(req,res) =>{

    let i_o_financeId = req.params.id;

    I_O_finance.findById(i_o_financeId,(err,i_o_finance)=>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            i_o_finance
        })
    });
})




module.exports = router;