import { useState } from 'react'
import './App.css'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script'; 
import SingIn from './component/SignIn';
import { clientGoogleId } from './assets/api'

function App() {

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
    <div className="App">
        <GoogleLogin 
                  clientId={clientId}
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
        />
    </div>
  )
}

export default App
