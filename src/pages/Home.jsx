import React,{ useState } from 'react';
import Body from '../component/Body';
import Header from '../component/Header';
import SingIn from '../component/SignIn';
import { useGlobalContext } from '../utils/context';
import { reducerCases } from "../utils/Constants";

const Home = ( ) => {
  const [{ token }, dispatch]  = useGlobalContext();
  
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

  return (
    <>
         {token ?   <SingIn /> : <Body/> }    
    </>
  );
};

export default Home;
