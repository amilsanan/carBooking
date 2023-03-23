require('dotenv').config()
const client = require('twilio')(process.env.TWILIO_ACCOUNTSID, process.env.TWILIO_AUTH); 
const servicesId=process.env.TWILIO_SERVICESID


   const doSms = async (req,res)=>{
        console.log("hhhhh",req.body.number);
        let phone = req.body.number       
        
        return new Promise((resolve,reject)=>{
            console.log('phonw number ---');
 
            client.verify.services(servicesId).verifications.create({
                to:`+91${phone}`,
                channel:'sms'
            }).then((res)=>{
                console.log(res);
                res.valid=true
                resolve(res)
            })
        })
    }
   const otpVerify = (otpData,number)=>{
    console.log('asd',otpData,number);
        let response
        return new Promise((resolve, reject) => {
            client.verify.services(servicesId).verificationChecks.create({
                to:`+91${number}`,
                code:otpData
            }).then((res)=>{
                console.log('asdlkj',res);
                if(res.status === 'approved'){
                    resolve(res)
                }else{
                    reject(response=false)
                }
            })
            console.log('hjk');
        })
    }
   const otpVerifys = (req,res)=>{
    console.log('asd',req.body);
        let response
       
            client.verify.services(servicesId).verificationChecks.create({
                to:`+91${req.body.number}`,
                code:req.body.otp
            }).then((resp)=>{
                console.log('asdlkj',resp);
                if(resp.status === 'approved'){
                   res.send(true)
                }else{
                    res.send(false)
                }
            })
            console.log('hjk');
        
    }
    module.exports =  {
        doSms,
        otpVerify,otpVerifys

}