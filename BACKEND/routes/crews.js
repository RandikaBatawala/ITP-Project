const express = require('express');
const Crews = require('../models/crews');

const router = express.Router();


//Save crew

router.post('/crew/save',(req,res)=>{

    const contractID = req.body.contractID;
    const position = req.body.position;
    const employeeID = req.body.employeeID;
    const employeeName = req.body.employeeName;
    const contactNo = req.body.contactNo;

    const newCrew = new Crews({
        contractID,
        position,
        employeeID,
        employeeName,
        contactNo
    });

    newCrew.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Crew Save Successfully"
        });
    });
});


//Get crew's details

router.get('/crews',(req,res)=>{

    Crews.find().exec((err, Crews)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingcrews: Crews
        });
    });
});


//Get a Specific crew details

router.get('/crew/:id', (req,res) => {

    let crewId = req.params.id;

    Crews.findById(crewId,(err,Crews) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            Crews
        });
    });
});


//Update crew's details

router.put('/crew/update/:id', (req,res)=>{

    Crews.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, Crews) => {
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

//Delete crew from the list

router.delete('/crew/delete/:id', (req,res)=>{

    Crews.findByIdAndRemove(req.params.id).exec((err, deletedCrew)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedCrew
        });
    });
});

module.exports = router;
