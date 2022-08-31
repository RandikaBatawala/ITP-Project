const mongoose = require('mongoose');
const li_monthlySchema = new mongoose.Schema({

    li_m_id:{
        type:String,
        required:true
    },
    li_m_date:{
        type:String,
    },
    li_m_amount:{
        type:String,
    },
    li_m_balance:{
        type:String,
    }


});

module.exports = mongoose.model('loan_insurance_monthly',li_monthlySchema)