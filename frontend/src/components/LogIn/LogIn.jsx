import React,{useState,useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
const { localStorage } = window;

function LogIn() {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const styleObj = { color: 'red' }

 
  const [user, setUser] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const navigate = useNavigate();

  const onClick = () => navigate('/signup')
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/login', data).then((res) => {
      console.log('response here', res.data);
      if(res.data.status=='blocked'){
        alert('user blocked')
      }else{
        localStorage.setItem('jwtToken', res.data.token);
        if (res.data.status) {  
          navigate('/')
        } else {
          alert('wrong password')
        }
      }
    })
  };
  

  const login = useGoogleLogin({
    onSuccess: async(codeResponse) =>{await  setUser(codeResponse)
    console.log('lkkl',codeResponse);
      console.log('jhhg',user);
      // navigate('/')
  },
    onError: (error) => console.log('Login Failed:', error)
});
useEffect(
  () => {
      if (user) {
          axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                  headers: {
                      Authorization: `Bearer ${user.access_token}`,
                      Accept: 'application/json'
                  }
              })
              .then((res) => {
                  console.log('poo',res);
                  navigate('/')
              })
              .catch((err) => console.log(err));
      }
  },
  [ user ]
);


  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div className="je2-sign-up-dialog">
        <div className="je2-sign-up-dialog__header">
          <div className="je2-sign-up-dialog__header-title"> Log in </div>
          <button className="je2-button _noborder js-close">
            <svg><use xlinkHref="#cross" /></svg>
          </button>
        </div>
        <div className="je2-sign-up-dialog__content">
          <div className="je2-sign-up-dialog__content__first-step _visible">

          
          <a onClick={() => login()} className="je2-button ">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_201_8131)">
                    <path d="M19.9997 10.2297C19.9997 9.54995 19.9434 8.8665 19.8235 8.19775H10.2002V12.0486H15.711C15.4823 13.2905 14.7475 14.3892 13.6716 15.0873V17.586H16.9593C18.89 15.8443 19.9997 13.2722 19.9997 10.2297Z" fill="#4285F4" />
                    <path d="M10.2002 20C12.9518 20 15.2723 19.1145 16.963 17.5859L13.6753 15.0873C12.7606 15.6973 11.5797 16.0427 10.2039 16.0427C7.54224 16.0427 5.28545 14.2826 4.4757 11.9163H1.08301V14.492C2.81497 17.8689 6.34262 20 10.2002 20Z" fill="#34A853" />
                    <path d="M4.47227 11.9163C4.04491 10.6743 4.04491 9.32947 4.47227 8.0875V5.51172H1.08333C-0.363715 8.33737 -0.363715 11.6664 1.08333 14.4921L4.47227 11.9163Z" fill="#FBBC04" />
                    <path d="M10.2002 3.95732C11.6547 3.93527 13.0605 4.47174 14.1139 5.45649L17.0268 2.60145C15.1824 0.903855 12.7344 -0.0294541 10.2002 -5.85336e-05C6.34261 -5.85336e-05 2.81497 2.13112 1.08301 5.51161L4.47195 8.08739C5.27795 5.71738 7.53849 3.95732 10.2002 3.95732Z" fill="#EA4335" />
                  </g>                
                </svg>
                <span>Continue with Google</span>
              </a>

            <div className="je2-sign-up-dialog__content__separator">
              <span>or</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} id="login-form" className="simple_form je2-sign-up-dialog__content-form je2-form" noValidate="novalidate" action="/auth-modals/login-with-email-and-password" acceptCharset="UTF-8" method="post"><input type="hidden" name="authenticity_token" defaultValue="6vi7N7J305yq8ow1vEIwJgpvCpruVQ8ODN3oC15Z_qN9q2AWWgIrlvfzYnc-Pi3oqOsNqFcGaOFJkAeh1FMQnw" autoComplete="off" />
              <div data-sitekey="6LeNK2caAAAAABqNVS2GtBowWgxSInPKc9XdX4PE" data-size="invisible" />
              <input defaultValue="https://www.jamesedition.com/" autoComplete="off" type="hidden" name="return_url" id="return_url" />
              <input defaultValue autoComplete="off" type="hidden" name="perform_url" id="perform_url" />
              <input defaultValue autoComplete="off" type="hidden" name="listing_id" id="listing_id" />
              <input defaultValue autoComplete="off" type="hidden" name="location" id="location" />
              <div className="je2-sign-up-dialog__content-form__field">
                <input  {...register("email", { required: true, maxLength: 20 })} id="email" className="je2-input" type="email" placeholder="Email" name="email" autoComplete="email" required />
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
              <div className="je2-sign-up-dialog__content__label">
                <a onClick={()=>navigate('/forgetPassword')} className="js-reset-pass">Forgot password?</a>
              </div>
            </form> </div>

        </div>
        <div className="je2-sign-up-dialog__footer">
          <div className="je2-sign-up-dialog__footer__separator" />
          <p>
            Not a member yet?
            <a onClick={onClick} className="je2-sign-up-dialog__footer-sign-up-btn je2-link">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogIn