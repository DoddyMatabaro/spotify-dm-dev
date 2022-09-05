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
import { useGlobalContext } from './utils/context';
import SpotifyPlayer from 'react-spotify-web-playback';


function App() {
  const { token,user,setUser,setToken,spotifyApi, getTokenFromUrl } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [logIn, setLogIn] = useState(false)

  // useEffect(() => {
  //      setLoading(true);
  //      setTimeout(() => {
  //       setLoading(false);
  //     }, 2000)        
  //   }, [])


  console.log("test : ",token);
  return (
    <>
      <Home/>
      <Sidebar/>
      {/* <Profile/> */}
      {/* <SpotifyPlayer
          token={token}
          uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
      /> */}
    </>
  )
  
}

export default App
