import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="947937234002-qvcmaslo0nmmdn2k7be6hjnivl6b2cr5.apps.googleusercontent.com">
  {/* <React.StrictMode> */}
  <Provider store={store}>
    <App />
  </Provider>
  {/* </React.StrictMode> */}
  </GoogleOAuthProvider>
)
