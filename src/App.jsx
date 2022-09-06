import { useState, useEffect } from 'react'
import './App.css'
import { clientGoogleId } from './assets/api';
import SingIn from './component/SignIn';
import { useGlobalContext } from './utils/context';
import { reducerCases } from "./utils/Constants";
import Body from './component/Body';

function App() {
  const [{ token, loading }, dispatch]  = useGlobalContext();
  
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [dispatch, token]);

  useEffect(() => {
        dispatch({ type: reducerCases.SET_LOADING, notLoading: !loading });
       setTimeout(() => {
        dispatch({ type: reducerCases.SET_LOADING, notLoading: !loading });

      }, 4000)        
    }, [])

  return (
    <div className="App">
         { !token ?   <SingIn /> : <Body/> }    
    </div>
  )
  
}

export default App
