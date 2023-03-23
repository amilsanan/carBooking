const UserCredential = require("../model/userCredentialModel")
const BookedCarCredential = require("../model/bookedCars")

const getAllUsers = async (req, res) => {
    try {
        const users = await UserCredential.find();
        res.json(users)
    } catch (error) {
        console.log(error.message);

    }
}
const blockControl = async (req, res) => {
    console.log('req==',req.body);
    const users = await UserCredential.updateOne({_id:req.body.id},[{ "$set": { "isBlocked": { "$eq": [false, "$isBlocked"] } } }]);
        console.log(users);
        res.send(true)
   
}
const numberExist = async (req, res) => {
    // console.log(req.body);
//    const a=await UserCredential.updateMany({}, {$set:{ isBlocked: false }} ).then((res)=>console.log(res))
    console.log(req.body.number);
    try {
        const users = await UserCredential.find({phone:req.body.number});
        console.log(users);
       if (Array.isArray(users) && users.length === 0) {
            res.send(false)
            } else {
            res.send(true)}
    } catch (error) {
        console.log(error.message);

    }
}

const updatePassword = async (req, res) => {
    console.log("Hi", req.body)
    try {
    const filter = { phone: req.body.phoneNo };
    const update = { $set: { password: req.body.password} }; // Replace with actual field and value to update

        // await UserCredential.find({phone:req.body.n}) .then((response) => {
        await UserCredential.updateMany(filter, update) .then((response) => {
            res.send(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}
const deleteUser = async (req, res) => {
    console.log("Hi", req.query.id);
    const userID = req.query.id;
    try {
        await UserCredential.deleteOne({ _id: userID }).then((response) => {
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}

const getUserDetails = async (req, res) => {
    const userId = req.query.id;
    try {
        await UserCredential.findOne({ _id: userId }).then((response) => {
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}
const getbookedCars = async (req, res) => {
    
    try {
        await BookedCarCredential.find().then((response) => {
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}
const addBookedCars = async (req, res) => {
    console.log(req.body);
    const newBooked = new BookedCarCredential({
         userId: req.body.userId,
         carId: req.body.carId,
         carImage: req.body.image,
    })
    await newBooked.save();
}

const getEditProfile = async (req, res) => {
    const userId = req.query.userid;
    const imageurl = req.query.imageurl;
    console.log("req.query", req.query);
    console.log("userId", userId);
    console.log("imageurl", imageurl);
    try {
        await UserCredential.updateOne(
            { _id: userId },
            {
                $set: {
                    image:imageurl
                }
            }
        ).then((response) => {
            console.log("responses",response);
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getAllUsers,
    deleteUser,
    getUserDetails,
    getEditProfile,updatePassword,numberExist,blockControl,getbookedCars,addBookedCars
}