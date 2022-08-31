
const express = require('express');
//const machineries = require('../models/machineries');
//const Machineries = require('../models/machineries');
const Contractforms = require('../models/contractforms');

const router = express.Router();


//Save Contractforms

router.post('/contractforms/save',(req,res)=>{

    let newContractforms = new Contractforms(req.body);

    newContractforms.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Contractforms Saved Successfully"
        });
    });
});


//Get Contractforms's details

router.get('/contractforms',(req,res)=>{

    Contractforms.find().exec((err, contractforms)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingContractforms: contractforms
        });
    });
});


//Get a Specific Contractforms

router.get('/contractforms/:id', (req,res) => {

    let contractformsId = req.params.id;

    Contractforms.findById(contractformsId,(err,contractforms) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            contractforms
        });
    });
});


//Update Contractforms's details

router.put('/contractforms/update/:id', (req,res)=>{

    Contractforms.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, contractforms) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully."
            });
        }
    );
});


//Delete Contractforms in the list

router.delete('/contractforms/delete/:id', (req,res)=>{

    Contractforms.findByIdAndRemove(req.params.id).exec((err, deletedContractforms)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedContractforms
        });
    });
});


module.exports = router;

