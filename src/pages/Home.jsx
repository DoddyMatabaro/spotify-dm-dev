import React,{ useState } from 'react';
import Header from '../component/Header';
import SingIn from '../component/SignIn';
import { useGlobalContext } from '../context';


const Home = ( ) => {
  const { openSidebar,spotifyApi, user } = useGlobalContext();

  const [nowPlaying, setNowPlaying] = useState({name: 'Not Checked', albumArt: ''})
  
  // function getNowPlaying(){
  //   // spotifyApi.getMyCurrentPlaybackState()
  //   //   .then((response) => {
  //   //     setNowPlaying({
  //   //       nowPlaying: { 
  //   //           name: response.item.name, 
  //   //           albumArt: response.item.album.images[0].url
  //   //         }
  //   //     });
  //   //   })
  //   // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
  //   //   if (err) console.error(err);
  //   //   else console.log('Artist albums', data);
  //   // });
  // spotifyApi
  // .getUserPlaylists() // note that we don't pass a user id
  // .then(
  //   function (data) {
  //     console.log('User playlists', data);
  //   },
  //   function (err) {
  //     console.error(err);
  //   }
  // );
  
  // }
  console.log("Taille : ",Object.keys(user).length)
  return (
    
    // Object.keys(user).length === 0  ? 
    //       <SingIn/> 
    //   :
          <>
            <Header/>
              <main>
              <div>
                  Now Playing: { nowPlaying.name }
              </div>
              <div>
                    <img src={nowPlaying.albumArt} style={{ height: 150 }}/>
              </div>
              <button onClick={() => getNowPlaying()}>
                  Check Now Playing
              </button>
            </main>
          </>  
  );
};

export default Home;
