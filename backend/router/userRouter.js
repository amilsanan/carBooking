const express = require('express');
const { usersignUp, userlogin, auth } = require('../controller/loginController');
const { payment } = require('../controller/paymentController');
const { protect } = require('../middleware/authMiddleware')
const {getSingleCar } = require('../controller/companyManagment');
const { getUserDetails, getEditProfile,updatePassword,numberExist,addBookedCars,getbookedCars} = require('../controller/userControllder');
const { doSms,otpVerifys } = require('../verify/otp');
const router = express.Router();

router.post('/signup',usersignUp);
// router.get('/asd',(req,res)=>{
//     res.send({name:'amil'})
// });

router.post('/otp',doSms)
router.post('/stripe',payment)
router.post('/otpverifys',otpVerifys)
router.post('/login',userlogin);
router.post('/updatePass',updatePassword);
router.post('/numExist',numberExist);
router.post('/addBookedCars',addBookedCars);
router.get('/getbookedCars',getbookedCars)
router.get('/getSingleCar/:id',getSingleCar)
router.get('/login',auth)
router.get('/getUserDetails',getUserDetails)
router.get('/editProfilePic',getEditProfile)

module.exports = router;