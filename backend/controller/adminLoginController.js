const adminCredential = require('../model/adminCredentialModel')
const bcryptjs = require('bcryptjs')
const jwt  = require('jsonwebtoken')

const adminLogin = async (req, res) => {
    console.log('hi1235',req.body);
    let { email, password } = req.body;

    // const newadmin = new adminCredential({
    //    username: email ,
    //     password,
       
    // })
    // console.log(newadmin);
    // newadmin.save()
    const admin= await adminCredential.findOne({username:email})
    if (admin){
    const validPassword = await bcryptjs.compare(password,admin.password)
    console.log('ok',validPassword);
    if (validPassword) {
        console.log("Correct Password",admin);
        // const token = jwt.sign({
        //     id: user._id,
        //     email: user.email
        // },
        // 'secret123'
        // )
        res.status(201).json({status:true});
    } 
    }else {
        res.json({status:false})
        console.log("Password Wrong");
    }
    // try {
    //     const admin = await adminCredential.findOne({ username });
    //     if (admin) {
    //         console.log("admin Found");
    //         const validPassword = await bcrypt.compare(password, admin.password);
    //         if (validPassword) {
    //             const token = jwt.sign({
    //                 username: admin.username
    //             },
    //             'secret123'
    //             )


    //             res.status(201).json({admin,token});
    //             console.log("Correct");
    //         }else{
    //             console.log("Password Wrong");
    //         }
    //     }else{
    //         console.log("No User");
    //     }
    // } catch (error) {
    //     console.log(error);
    // }

}

module.exports = {
    adminLogin
}