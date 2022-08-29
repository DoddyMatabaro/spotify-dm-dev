import { useState, useEffect } from 'react'
import './App.css'
import { clientGoogleId } from './assets/api';
import Footer from './component/Footer';
import Header from './component/Header';
import Profile from './component/Profile';
import axios from 'axios';
;import SingIn from './component/SignIn';

function App() {
 
  const [token, setToken] = useState("")

  const [logIn, setLogIn] = useState(false)
  const [artists,setArtists] = useState([]);
  const [searchKey, setSearchKey] = useState("");


  
  const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
    ))
  }
     
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

  return (
    <div className="App">
        <Header token={token} setToken={setToken}/>
             { !token ? 
                  <SingIn  clientGoogleId={clientGoogleId} /> 
                :
                  <Profile />
             }
 
        <Footer />

        {/* <div className="App">
            
            <div>
              <h3>Resultat</h3>
              {renderArtists()}
            </div>
        </div> */}
    </div>
  )
}

export default App
