import { useState, useEffect } from 'react'
import './App.css'
import { clientGoogleId } from './assets/api';
import Footer from './component/Footer';
import Header from './component/Header';
import Profile from './component/Profile';
import axios from 'axios';
import SingIn from './component/SignIn';
import Home from './pages/Home';
import Sidebar from './component/SideBar';
import { useGlobalContext } from './context';

function App() {
  const { token,user,setUser,setToken,spotifyApi, getTokenFromUrl } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  // const [token, setToken] = useState("")
  const [logIn, setLogIn] = useState(false)
  // const [searchResult,setSearchResult] = useState([]);
  // const [searchKey, setSearchKey] = useState("");
     
  // useEffect(() => {
  //      setLoading(true);
  //      setTimeout(() => {
  //       setLoading(false);
  //     }, 2000)        
  //   }, [])

  useEffect(()=>{
    const _token = getTokenFromUrl().access_token;
    window.location.hash = ""
    console.log("token : ", _token);
    if(_token){
      setToken(_token);
      spotifyApi.setAccessToken(_token)
      spotifyApi.getMe().then((user)=>{
        setUser(user);
        console.log("user : ", user)
      });
    }
  })
  console.log("test : ",token);
  return (
    <>
      <Home/>
      <Sidebar/>
      <Profile/>
    </>
  )
  
}

export default App
