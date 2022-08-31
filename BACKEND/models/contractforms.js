const mongoose = require('mongoose');

const contractformSchema = new mongoose.Schema({

   
    contractID: {
        //nam:e kiyana eka aithi data type eka mokakd kiyal denawa api
        type: String,
        required: true //name kiyana eka thibbe naththam data base ekata yanne na e detail requird eka thiyana nisa
    },
    contractCategory: {
        type: String,
        required: true
    },
    siteLocation: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    expectedBudget: {
        type: String,
        required: true
    },
    expectedSdate: {
        type: String,
        required: true
    },
    expectedEdate: {
        type: String,
        required: true
    },
    breifDescription: {
        type: String,
        required: true
    }, 
    
    preferedMeterialDescription: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Contractforms',contractformSchema);