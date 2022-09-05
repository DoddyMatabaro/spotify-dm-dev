import React, { useState, useEffect } from 'react'
import Header from '../Header'
import './signIn.css'
// import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script'; 


const SingIn = ({ clientGoogleId }) => {
  const handleClick = async () => {
    const CLIENT_ID = "9b707ef30ad74876b0ebded1d118b9ce"
    const REDIRECT_URI = "http://localhost:5174/callback/"
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
      // useEffect(() => { //initialize gapi and client ID
      // const initClient = () => {
      //       gapi.client.init({
      //       clientId: clientGoogleId,
      //       scope: ''
      //     });
      //  };
      //  gapi.load('client:auth2', initClient);
      // });
  
      // const onSuccess=()=>{
      //   console.log('====================================');
      //   console.log('success:', res);
      //   console.log('====================================');
      // }
  
      // const onFailure=()=>{
      //   console.log('====================================');
      //   console.log('Failed:', err);
      //   console.log('====================================');
      // }
  return (
    <div className=''>
        <div className='sign-in-content'>
              <div className=''>
                  <img
                    className='img-login'
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
                    alt="spotify"
                  />
                  <button  className="btn btn-login" onClick={handleClick}>Connect Spotify GDA</button>
                    {/* <a className='btn btn-primary spotify-btn' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>LOGIN TO SPOTIFY GDA</a>            */}
              </div>
              {/* <article> */}
                    {/* <GoogleLogin 
                      clientId={clientGoogleId}
                      buttonText="Sign in with Google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={true}
                      className="google-login"
                    /> */}
                    {/* <p>By signing up in our spotify GDA app , 
                          you agree with
                        our <a href='#'>Terms & Conditions</a> and <a href='#'>Privacy Policy</a>. 
                    </p> */}
              {/* </article> */}
        </div>
    </div>
  )
}

export default SingIn