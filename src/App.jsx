import { useState, useEffect } from 'react'
import './App.css'
import { clientGoogleId } from './assets/api';
import Footer from './component/Footer';
import Header from './component/Header';
import Profile from './component/Profile';
import axios from 'axios';
;import SingIn from './component/SignIn';

function App() {
 
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("")
  const [logIn, setLogIn] = useState(false)
  const [artists,setArtists] = useState([]);
  const [searchKey, setSearchKey] = useState("");
     
  useEffect(() => {
       setLoading(true);
       setTimeout(() => {
        setLoading(false);
      }, 2000000);

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
        {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (
        <Header setArtists={setArtists} searchKey={searchKey} token={token} setToken={setToken} setSearchKey={setSearchKey}/>,
              ((!token) ? 
                  (<SingIn  clientGoogleId={clientGoogleId} />) 
                 :
                  (<Profile artists={artists} token={token} />)),     
        <Footer />)}  

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
