const mongoose = require('mongoose');

const company = mongoose.Schema({
    name: String,
    imagename:String,
    
});

const CompanyCredential = mongoose.model('company', company);
module.exports =CompanyCredential;