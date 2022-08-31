const express = require('express');
const AddContracts = require('../models/addContracts'); 
const router = express.Router();

// const upload = require('../middleware/upload')

//Create Contract
router.post('/addContracts/save', (req,res)=>{
    let newAddContracts = new AddContracts(req.body);

    newAddContracts.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Contract Added Successfully"
        });
    });
});

//Get Contract details

router.get('/addContracts',(req,res)=>{

    AddContracts.find().exec((err, addContracts)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingContracts: addContracts
        });
    });
});


//Get a Specific Contractforms

router.get('/addContracts/:id', (req,res) => {

    let contractformsId = req.params.id;

    AddContracts.findById(contractformsId,(err,addContracts) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            addContracts
        });
    });
});


//Update Contract details

router.patch('/addContracts/update/:id', (req,res)=>{

    AddContracts.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, addContracts) => {
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


//Delete Contract in the list

router.delete('/addContracts/delete/:id', (req,res)=>{

    AddContracts.findByIdAndRemove(req.params.id).exec((err, deletedAddContracts)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedAddContracts
        });
    });
});


module.exports = router;