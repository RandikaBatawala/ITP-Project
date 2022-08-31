const { status } = require('express/lib/response');
const mongoose = require('mongoose');
const addcontractsSchema = new mongoose.Schema({
    contractID: {
        type: String,
        required: true
    },
    customerID: {
        type: String,
        required: true
    },
    contractCategory: {
        type: String,
        required: true
    },
    cusReqFormlinks: {
        type: String,
       // required: false
    },
    suggestedBluePrintlinks: {
        type: String,
        //required: false
    },
    estimatedCost:{
        type: String,
        //required: false
    },
    status:{
        type: String,
        required: true
    }


});

module.exports = mongoose.model('AddContracts',addcontractsSchema);