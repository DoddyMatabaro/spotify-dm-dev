import { useState, useEffect } from 'react'
import './App.css'
import { clientGoogleId } from './assets/api';
import Footer from './component/Footer';
import Header from './component/Header';
import Profile from './component/Profile';
import axios from 'axios';
;import SingIn from './component/SignIn';

function App() {
  const CLIENT_ID = "9b707ef30ad74876b0ebded1d118b9ce"
  const REDIRECT_URI = "http://localhost:5174/callback/"
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

     const searchArtists = async (e) => {
      e.preventDefault()
      const {data} = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
              q: searchKey,
              type: "artist"
          }
      })
  
      setArtists(data.artists.items)
  }
  
  return (
    <div className="App">
        {/* <Header/> */}
             {/* { logIn ? 
                  <SingIn  clientGoogleId={clientGoogleId} /> 
                :
                  <Profile />
             } */}
 
        {/* <Footer /> */}

        <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </header>
        </div>
    </div>
  )
}

export default App
