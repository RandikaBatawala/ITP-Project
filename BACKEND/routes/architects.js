const express = require('express');
const Architects = require('../models/architects');

const router = express.Router();


//Save plan details

router.post('/architect/save',(req,res)=>{

    const contractID = req.body.contractID;
    const description = req.body.description;
    const uploadFileUrl = req.body.uploadFileUrl;
    const modifiedDate = req.body.modifiedDate;
    const employeeID = req.body.employeeID;
    const category = req.body.category;
    const uploadSoftCopyUrl = req.body.uploadSoftCopyUrl;

    const newArchitect = new Architects({
        contractID,
        description,
        uploadFileUrl,
        modifiedDate,
        employeeID,
        category,
        uploadSoftCopyUrl
    });

    newArchitect.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Plan Details Save Successfully"
        });
    });
});


//Get plans details

router.get('/architects',(req,res)=>{

    Architects.find().exec((err, Architects)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingArchitects: Architects
        });
    });
});


//Get a Specific plan details

router.get('/architect/:id', (req,res) => {

    let architectId = req.params.id;

    Architects.findById(architectId,(err,Architects) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            Architects
        });
    });
});


//Update Architect plan's details

router.put('/architect/update/:id', (req,res)=>{

    Architects.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, Architects) => {
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

//Delete Architect plan from the list

router.delete('/architect/delete/:id', (req,res)=>{

    Architects.findByIdAndRemove(req.params.id).exec((err, deletedArchitect)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedArchitect
        });
    });
});


module.exports = router;
