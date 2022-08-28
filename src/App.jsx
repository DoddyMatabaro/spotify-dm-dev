import { useState, useEffect } from 'react'
import './App.css'
import { clientGoogleId } from './assets/api';
import Footer from './component/Footer';
import Header from './component/Header';
import Profile from './component/Profile';

import SingIn from './component/SignIn';

function App() {
  const [logIn, setLogIn] = useState(false)

  return (
    <div className="App">
        <Header/>
             { logIn ? 
                  <SingIn  clientGoogleId={clientGoogleId} /> 
                :
                  <Profile />
             }
 
        <Footer />
    </div>
  )
}

export default App
