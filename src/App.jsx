import { useState, useEffect } from 'react'
import './App.css'
import { clientGoogleId } from './assets/api';
import Footer from './component/Footer';
import Header from './component/Header';
import Profile from './component/Profile';

import SingIn from './component/SignIn';

function App() {
  const CLIENT_ID = "9b707ef30ad74876b0ebded1d118b9ce"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  const [logIn, setLogIn] = useState(false)

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
    }, [])

      const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
     }
  return (
    <div className="App">
        <Header/>
             {/* { logIn ? 
                  <SingIn  clientGoogleId={clientGoogleId} /> 
                :
                  <Profile />
             } */}
 
        <Footer />
    </div>
  )
}

export default App
