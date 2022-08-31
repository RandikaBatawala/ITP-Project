const mongoose = require('mongoose');
const con_financeSchema = new mongoose.Schema({

    con_id:{
        type:String,
        required:true
    },
    material_cost:{
        type:String,
    },
    rough_cost:{
      type:String,
    },
    ex_crew:{
      type:String,
    },
    con_des:{
    type:String,
    },
    estimated_cost:{
    type:String,
    }


});

module.exports = mongoose.model('contract_finance',con_financeSchema)