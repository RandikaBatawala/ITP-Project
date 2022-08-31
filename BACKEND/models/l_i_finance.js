const mongoose = require('mongoose');
const li_financeSchema = new mongoose.Schema({

    li_id:{
        type:String,
        required:true
    },
    li_des:{
        type:String,
    },
    li_period:{
        type:String,
    },
    li_amount:{
        type:String,
    },
    li_name:{
        type:String,
    },
    li_monthly_amount:{
        type:String,
    }


});

module.exports = mongoose.model('loan_insurance',li_financeSchema)