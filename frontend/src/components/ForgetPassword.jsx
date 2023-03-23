import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import bcryptjs from "bcryptjs";
import axios from 'axios';

function ForgetPassword() {
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit} = useForm()
    const onClick=()=>navigate('/login')
    
    const [isVisibleotp, setIsVisibleotp] = useState(true);   
    const [isVisibleVerify, setIsVisibleVerify] = useState(false);
    const [isVisibleVerifybtn, setIsVisibleVerifybtn] = useState(false);
    const [isVisiblepass, setIsVisiblepass] = useState(false);
    const [inputOtp, setInputOtp] = useState("");
    const [phone, setPhone] = useState();
    const [otpNo, setOtpNo] = useState();
    const [newPass, setNewPass] = useState();
  
    const handleChange = (event) => {
      
    }
    const otp = (number)=>{
        setIsVisibleotp(false)
        setIsVisibleVerify(true)
        setIsVisibleVerifybtn(true)
        let num={number:phone}  
         console.log(num);
         axios.post('http://localhost:5000/otp',num).then((res)=>console.log(res)).catch((err)=>console.log('err=',err))
         
        }
        
        const pass = (number)=>{
          setIsVisibleVerifybtn(false)
         
          let data={number:phone,otp:otpNo} 
          axios.post('http://localhost:5000/otpVerifys',data).then((res)=>{
            console.log('kljj',res);
            if(res){
              setIsVisiblepass(true)
            }else{
              alert('wrong otp')
            }
          }).catch((err)=>console.log('err=',err))
                
    }
    const onSubmit =async () => { 
      
      const saltRounds = 10;
      const hashedPassword = await bcryptjs.hash(newPass, saltRounds);    
      let h={phoneNo:phone,password:hashedPassword}
      axios.post('http://localhost:5000/updatePass',h).then((res)=>console.log(res)).catch((err)=>console.log('err=',err))
      console.log();
      console.log(newPass);
     
    };

  return(
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
     <div className="je2-sign-up-dialog">
        <div className="je2-sign-up-dialog__header">
          <div className="je2-sign-up-dialog__header-title">Change password</div>
          <button className="je2-button _noborder js-close">
            <svg><use xlinkHref="#cross" /></svg>
          </button>
        </div>
        <div className="js-sign-up-form">
          <div className="je2-sign-up-dialog__content">
            <div className="je2-sign-up-dialog__content__first-step js-first-step _visible">
             
              <form  id="registration-form-first-step" className="simple_form je2-sign-up-dialog__content-form je2-form" >
              
              
                <div className="je2-sign-up-dialog__content-form__field">
                  <input  className="je2-input" onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Phone" name="phone" required />
                  <div className="js-error-message _hidden">
                  </div>
                </div> 
                <div className="je2-sign-up-dialog__content-form__continue">
                  <div className="je3-spinner">
                  </div>
                  {isVisibleotp && (
                  <button type='button' onClick={otp} className="je2-button _black js-save">
                    <span>
                      send otp
                    </span>
                  </button>)}
                </div>

                {isVisibleVerify && (
                  <div className="je2-sign-up-dialog__content-form__field">
                  <input type="number"  className="je2-input" onChange={(e)=>setOtpNo(e.target.value)} placeholder="otp" name="otp" required />
                  <div className="js-error-message _hidden">
                  </div>
                </div>  )}
                {isVisibleVerifybtn && (
                <div className="je2-sign-up-dialog__content-form__continue">
                  <div className="je3-spinner">
                  </div>
                  <button onClick={pass}  className="je2-button _black js-save">
                    <span>
                      verify OTP
                    </span>
                  </button>
                </div>)}
                {isVisiblepass && (                   
                <div className="je2-sign-up-dialog__content-form__continue">
                <input  className="je2-input" type="text" onChange={(e)=>setNewPass(e.target.value)} placeholder="new password" name="password" required />

                  <div className="je3-spinner">
                  </div>
                  <button  onClick={onSubmit} className="je2-button _black js-save">
                    <span>
                      Change password
                    </span>
                  </button>
                </div>)}
              </form>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword;
