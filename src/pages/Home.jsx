import React,{ useState } from 'react';
import Header from '../component/Header';
import SingIn from '../component/SignIn';
import { useGlobalContext } from '../utils/context';


const Home = ( ) => {
  const { openSidebar,spotifyApi, user } = useGlobalContext();

  return (
      <SingIn />    
    // <>
          //   <Header/>
          //     <main>
             
          //     </main>
          // </>  
  );
};

export default Home;
