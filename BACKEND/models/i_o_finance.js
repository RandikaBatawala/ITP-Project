const mongoose = require('mongoose');
const io_financeSchema = new mongoose.Schema({

    io_id:{
        type:String,
        required:true
    },
    io_des:{
        type:String,
    },
    io_date:{
        type:String,
    },
    io_amount:{
        type:String,
    },
    io_balance:{
        type:String,
    },
    i_o:{
        type:String,
    }


});

module.exports = mongoose.model('income_outcome',io_financeSchema)