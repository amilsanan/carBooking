const CompanyCredential= require('../model/addCompanyModel')
const CarCredential= require('../model/carModel')
// const cloudinary = require("../cloudinary")
// const cloudinary = require('cloudinary').v2

// // Configuration 
// cloudinary.config({
//   cloud_name: "ds95de0tj",
//   api_key: "145737747856156",
//   api_secret: "MpBDHH5I2vPg06J_POqXP4Qurx8"
// });


// Upload



const addCompanies = async(req, res) => {
    // console.log(req.body);
    console.log('yesyes');
        try {
            if (!req.body) {
                res.send({
                    status: "failed",
                    message: "No file uploaded",
                });
            } else {
                console.log('this body',req.body);
                
                const company= new CompanyCredential({
                    name:req.body.name,
                    imagename:req.body.image,
                })
                await company.save().then((res)=>{
                    console.log('jk',res._id);
                   
                })
                // var imgname= req.files.file.name
                // var file = req.files.file;
                // const image =await cloudinary.uploader.upload(file,{folder:"images"})
                // console.log('liuop',image);     
                //  file.mv("./frontend/public/images/company/" +imgname);
    
                res.send({
                    status: "success",
                    message: "File is uploaded",
                    
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }

const getCompanies = async (req,res)=>{
    console.log('get companiesknn');
    try {
        await CompanyCredential.find({}).then((response) => {
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}
const getSingleCar = async (req,res)=>{
    console.log(req.params);
    console.log('get companiesknn');
    try {
        await CarCredential.findOne({_id:req.params.id}).then((response) => {
            console.log(response);
            res. status(200).json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}


const addCars =async (req, res) =>{
    // console.log(req.body.data);
    // let file = req.files.file;
    if(!req.body){
        res.send({
            status: "failed",
           
            
        });
    }
    
    console.log('this body',req.body);
    // console.log('this isit',req.files);
    
    const company= new CarCredential({
        name:req.body.name,
       
        brand: req.body.brand,
        price: req.body.price,
        year: req.body.year,
        kms: req.body.kms,
        fuel: req.body.fuel,
        regNo:req.body.regNo,       
        imagename:req.body.image,
    })
    await company.save().then((resp)=>{
        console.log('jk',resp);
        res.send({
            status: "success",
            message: "File is uploaded",
            
        });
       
    })
    // var file = req.files.image;
    //   file.mv("./frontend/public/images/car/" + req.files.image.name);
}

const getCars =async (req,res)=>{
    console.log('get cars');
    // await CarCredential.updateMany({}, { $set: {"isbooked": false} })
    try {
        await CarCredential.find({}).then((response) => {
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}
// const getAcar =async (req,res)=>{
//     console.log('get cars',req.body);
//     try {
//         await CarCredential.find({_id:req.body.id}).then((response) => {
//             res.json(response)
//         })
//     } catch (error) {
//         console.log(error.message);
//     }
// }
const updateCars =async (req,res)=>{
   console.log('.....',req.body);
   try {
    await CarCredential.updateOne({_id:req.body._id},{
        $set:{
            name:req.body.name,       
            brand: req.body.brand,
            price: req.body.price,
            year: req.body.year,
            kms: req.body.kms,
            fuel: req.body.fuel,
            regNo:req.body.regNo,       
            imagename:req.body.imagename,
        }}
        ).then((response) => {
        res.send(response)
    })
} catch (error) {
    console.log(error.message);
}
}

const deleteCars =async (req,res)=>{
    console.log('delete cars',req.body);
    try {
        await CarCredential.deleteOne({_id:req.body.id}).then((response) => {
            res.send(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}
const deleteCompany =async (req,res)=>{
    console.log('delete cars',req.body);
    try {
        await CompanyCredential.deleteOne({_id:req.body.id}).then((response) => {
            res.send(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    addCompanies,
    getCompanies,
    addCars,getCars,deleteCars,deleteCompany,getSingleCar,updateCars,
}

