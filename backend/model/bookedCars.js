const mongoose = require('mongoose');

const bookedCars = mongoose.Schema({
    userId: String,
    carId: String,
    carImage: String,

    
});

const BookedCarCredential = mongoose.model('booked Cars', bookedCars);
module.exports =BookedCarCredential;