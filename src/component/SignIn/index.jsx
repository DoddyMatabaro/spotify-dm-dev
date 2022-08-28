import React, { useState, useEffect } from 'react'
import Header from '../Header'
import './signIn.css'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script'; 


const SingIn = ({ clientGoogleId }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

      useEffect(() => { //initialize gapi and client ID
      const initClient = () => {
            gapi.client.init({
            clientId: clientGoogleId,
            scope: ''
          });
       };
       gapi.load('client:auth2', initClient);
      });
  
      const onSuccess=()=>{
        console.log('====================================');
        console.log('success:', res);
        console.log('====================================');
      }
  
      const onFailure=()=>{
        console.log('====================================');
        console.log('Failed:', err);
        console.log('====================================');
      }
      
  return (
    <div className=''>
        <h3>Login</h3>
        <div className='sign-in-content'>
              <article>
                  <div className='sign-in-input'>
                      <label >Email Adress</label>
                      <input type="mail" id="email" name="" placeholder='Email'/>
                  </div>
                  <div className='sign-in-input'>
                      <label >Password</label>
                      <input type="password" id='password' placeholder='Password'/>
                  </div>
                  <button>Log In</button>
                  <p>Don't have an account? <a href='#'>Sign Up</a></p>
                  <p>Fogot your password? <a href='#'>Click here</a></p>
              </article>
              <article>
                    <GoogleLogin 
                      clientId={clientGoogleId}
                      buttonText="Sign in with Google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={true}
                      className="google-login"
                    />
                    <p>By signing up in with Google or GitHub, 
                          you agree with
                        our <a href='#'>Terms & Conditions</a> and <a href='#'>Privacy Policy</a>. 
                    </p>
              </article>
        </div>
    </div>
  )
}

export default SingIn