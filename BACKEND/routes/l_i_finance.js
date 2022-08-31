const express = require('express');
const L_I_finance = require('../models/l_i_finance');

const router = express.Router();

//save loan or insurance


router.post('/loan_insurance_f/save',(req,res)=>{

    let newL_I_finance = new L_I_finance(req.body);

    newL_I_finance.save((err)=>{
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
router.get('/l_i_finances/view',(req,res)=>{
    L_I_finance.find().exec((err,l_i_finances)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingL_I_finance:l_i_finances
        });
    });
});

//update contract finances
router.put('/l_i_finances/update/:id',(req,res)=>{
    L_I_finance.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,l_i_finances)=>{
            if(err){
                return res.status(400).json({error:err})
            }
            return res.status(200).json({
                success:"Updated loan and insurance finance successfully"
            });
        }
    );
});



//delete record
router.delete('/l_i_finances/:id',(req,res)=>{
    L_I_finance.findByIdAndRemove(req.params.id).exec((err,deleteL_I_finance)=>{
        
        if(err) return res.status(400).json({
            message:"delete unsuccessful",err
        });

        return res.json({
            message:"delete successful",deleteL_I_finance
        });

    });
});


//get a specific record

router.get("/l_i_finance_one/:id" ,(req,res) =>{

    let l_i_financeId = req.params.id;

    L_I_finance.findById(l_i_financeId,(err,l_i_finance)=>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            l_i_finance
        })
    });
})









module.exports = router;