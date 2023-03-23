const mongoose = require('mongoose');

const car = mongoose.Schema({
    name: String,
    brand: String,
    price: String,
    year: String,
    kms: String,
    fuel: String,
    regNo:String,
    imagename:String,
    isbooked:String,
    
});

const CarCredential = mongoose.model('car', car);
module.exports =CarCredential;