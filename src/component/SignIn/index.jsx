import React, { useState, useEffect } from 'react'
import Header from '../Header'
import './signIn.css'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import { gapi } from 'gapi-script'; 

const SingIn = () => {
  const CLIENT_ID=process.env.CLIENT_ID;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const api_uri = process.env.api_uri;
  const scope = process.env.scope;
  
  const handleClick = async () => {
    window.location.href = `${api_uri}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
      
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
             
        </div>
    </div>
  )
}

export default SingIn;
