const UserCredential = require("../model/userCredentialModel");
const jwt  = require('jsonwebtoken')
const bcryptjs = require('bcryptjs');
const { otpVerify } = require("../verify/otp");
// const jwt = require('jsonwebtoken')  


const generateToken=(id)=>{
    return jwt.sign({id},process.env.jwt_secret,{
        expiresIn:  '30d',
    })
}

const usersignUp = async (req, res) => {
    console.log('kkkk',req.body);
    let { name, email, password,phone } =await req.body;
    console.log(req.body.phone,req.body.otp);
    // const validPassword = await bcryptjs.compare('kk',req.body.password);
    // console.log('valis=',validPassword);
        otpVerify(req.body.otp,req.body.phone).then(async(resp)=>{
            console.log('sdd===>>',resp);
            if (resp){
                console.log('res is true')
                const newUser = new UserCredential({
                    name,
                    email,
                    password,
                    phone
                })
                await newUser.save();

              let t= generateToken(newUser.id)
                res.json({ status: "success" },j);

            }
            else{
                console.log('res is false')
                res.json({ status: "failure" });
            }
        })

    
        

    // try {
    //     if(!username&&!fname&&!email){
            
    //         res.json({data:"no user"})
    //     }
    //     else{
    //         await newUser.save();
    //     console.log("vjhdvchj");
    //     const token = jwt.sign({
    //         email: email
    //     },
    //     'secret123'
    //     )
    //     console.log("vjhdvchj");
    //     res.status(201).json({newUser,token});
    //     }
        
    // } catch (error) {
    //     res.status(409).json({ message: error.message })
    // }
}

const userlogin = async (req, res) => {
    console.log('req==>',req.body);
    
    let { email, password } = req.body;
     console.log('psaa',password);
    try {
        const user = await UserCredential.findOne({ email: email });
        console.log(user);
        if(user.isBlocked){
            console.log('456');
            res.json({status:'blocked'})
        }
        else{

            console.log("server", user.password);
            if (user) {
                console.log('hi');
                const validPassword = await bcryptjs.compare(password,user.password);
                 console.log('valis=',validPassword);
                if (validPassword) {
                    console.log("Correct Password",user);
                    // const token = jwt.sign({
                    //     id: user._id,
                    //     email: user.email
                    // },
                    // 'secret123'
                    // )
                    res.status(201).json({status:true,
                    token:generateToken(user._id)
                    });
                } else {
                    res.json({status:false})
                    console.log("Password Wrong");
                }
            } else {
                console.log("Invalid Details");
            }
        }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const auth =async (req,res)=>{
    console.log("hi");
}

module.exports = {
    usersignUp,
    userlogin,
    auth
}