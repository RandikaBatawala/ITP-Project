const express = require('express');
const L_I_monthly = require('../models/l_i_monthly');

const router = express.Router();

//save monthly loan and insurance

router.post('/loan_insurance_m/save',(req,res)=>{

    let newL_I_monthly = new L_I_monthly(req.body);

    newL_I_monthly.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Monthly loan or insurance saved successfully"
        });
    });

});


//get contract finances
router.get('/l_i_monthly/view',(req,res)=>{
    L_I_monthly.find().exec((err,l_i_monthlies)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingL_I_monthly:l_i_monthlies
        });
    });
});


//update contract finances
router.put('/l_i_monthly/update/:id',(req,res)=>{
    L_I_monthly.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,l_i_monthlies)=>{
            if(err){
                return res.status(400).json({error:err})
            }
            return res.status(200).json({
                success:"Updated loan and insurance monthly finance successfully"
            });
        }
    );
});


//delete record
router.delete('/l_i_monthly/:id',(req,res)=>{
    L_I_monthly.findByIdAndRemove(req.params.id).exec((err,deleteL_I_monthly)=>{
        
        if(err) return res.status(400).json({
            message:"delete unsuccessful",err
        });

        return res.json({
            message:"delete successful",deleteL_I_monthly
        });

    });
});



//get a specific record

router.get("/contract_finance_one/:id" ,(req,res) =>{

    let l_i_monthlyId = req.params.id;

    L_I_monthly.findById(l_i_monthlyId,(err,l_i_monthly)=>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            l_i_monthly
        })
    });
})





module.exports = router;