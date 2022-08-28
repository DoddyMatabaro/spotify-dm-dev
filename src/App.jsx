import { useState, useEffect } from 'react'
import './App.css'
import { clientGoogleId } from './assets/api';
import Footer from './component/Footer';
import Header from './component/Header';

import SingIn from './component/SignIn';

function App() {
  const [logIn, setLogIn] = useState(false)

  return (
    <div className="App">
        <Header/>
             { logIn ? 
                  <SingIn  clientGoogleId={clientGoogleId} /> 
                :
                  <h2>Test</h2>
             }
 
        <Footer />
    </div>
  )
}

export default App
