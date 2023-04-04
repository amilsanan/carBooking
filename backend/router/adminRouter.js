const express = require('express');
const { adminLogin } = require('../controller/adminLoginController');
const { getAllUsers, deleteUser,blockControl ,deleteBookedCarsAdmin} = require('../controller/userControllder');
const adminrouter = express.Router();
const { addCompanies,getCompanies,addCars, getCars ,deleteCars,updateCars,deleteCompany,getSingleCar} = require('../controller/companyManagment');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
getSingleCar



adminrouter.post('/adminlogin',adminLogin);
adminrouter.post('/addCompanies',addCompanies);
adminrouter.post('/addCars',addCars);
adminrouter.post('/deleteCars',deleteCars);
adminrouter.post('/deleteCompany',deleteCompany);
adminrouter.post('/updateCars',updateCars);
adminrouter.get('/getCars',getCars);
adminrouter.post('/block',blockControl);
adminrouter.get('/getUsers',getAllUsers);
adminrouter.get('/getSingleCar/:id',getSingleCar);
adminrouter.get('/deleteBookedCarsAdmin/:id',deleteBookedCarsAdmin);

adminrouter.post('/userDelete',deleteUser)
adminrouter.get('/getCompanies',getCompanies)

module.exports = adminrouter;