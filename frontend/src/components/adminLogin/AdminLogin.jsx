import React from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import bcryptjs from "bcryptjs";
import { useForm } from "react-hook-form";

function AdminLogin() {
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit} = useForm()
    const styleObj = {color:'red'}
    const onSubmit =async (data) => {
        console.log(data);
    //     const saltRounds = 10;
    // const hashedPassword = await bcryptjs.hash(data.password, saltRounds); 
    // data.password=hashedPassword
    // console.log(data);
        axios.post('http://localhost:5000/admin/adminlogin', data).then((res)=>{
            console.log('response here',res.data);
            if(res.data.status){
              navigate('/admin/dashboard')
            }else{
              alert('wrong password')
            }
        })
    }

  return <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <div className="je2-sign-up-dialog">
  <div className="je2-sign-up-dialog__header">
    <div className="je2-sign-up-dialog__header-title">Admin Log in </div>
    <button className="je2-button _noborder js-close">
      <svg><use xlinkHref="#cross" /></svg>
    </button>
  </div>
  <div className="je2-sign-up-dialog__content">
    <div className="je2-sign-up-dialog__content__first-step _visible">
      <form onSubmit={handleSubmit(onSubmit)} id="login-form" className="simple_form je2-sign-up-dialog__content-form je2-form" noValidate="novalidate" action="/auth-modals/login-with-email-and-password" acceptCharset="UTF-8" method="post"><input type="hidden" name="authenticity_token" defaultValue="6vi7N7J305yq8ow1vEIwJgpvCpruVQ8ODN3oC15Z_qN9q2AWWgIrlvfzYnc-Pi3oqOsNqFcGaOFJkAeh1FMQnw" autoComplete="off" />
        <div data-sitekey="6LeNK2caAAAAABqNVS2GtBowWgxSInPKc9XdX4PE" data-size="invisible" />
        <input defaultValue="https://www.jamesedition.com/" autoComplete="off" type="hidden" name="return_url" id="return_url" />
        <input defaultValue autoComplete="off" type="hidden" name="perform_url" id="perform_url" />
        <input defaultValue autoComplete="off" type="hidden" name="listing_id" id="listing_id" />
        <input defaultValue autoComplete="off" type="hidden" name="location" id="location" />
        <div className="je2-sign-up-dialog__content-form__field">
          <input  {...register("email")} id="email" className="je2-input" type="email" data-required-error="Enter your email address" placeholder="Email" name="email" autoComplete="email" required />
          {errors.email && <span style={styleObj}>Enter email</span>}</div>
        <div className="je2-sign-up-dialog__content-form__field">
          <input {...register("password")} id="password" className="je2-input" type="password" data-required-error="Enter your password" placeholder="Password" name="password" autoComplete="current-password" required />
          <div className="js-error-message _hidden">
          </div>
        </div>
        <div className="je2-sign-up-dialog__content-form__continue">
          <div className="je3-spinner">
            <div />
            <div />
            <div />
          </div>
          <button type='submit' className="je2-button _black js-save">
            <span>
              LogIn
            </span>
          </button>
        </div>
      </form> </div>
   
  </div>
  <div className="je2-sign-up-dialog__footer">
    <div className="je2-sign-up-dialog__footer__separator" />
  </div>
</div>
</div>;
}

export default AdminLogin;
