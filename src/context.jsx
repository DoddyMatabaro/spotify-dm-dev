import React, { useState, useContext} from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import {data} from './data'
const AppContext = React.createContext();


function AppProvider({ children }) {
    const getStorageTheme = () => {
        let theme = 'light-theme';
        if (localStorage.getItem('theme')) {
          theme = localStorage.getItem('theme');
        }
        return theme;
      };

  const [theme, setTheme] = useState(getStorageTheme());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState(null);

  const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const toggleTheme = () => {
        if (theme === 'light-theme') {
          setTheme('dark-theme');
        } else {
          setTheme('light-theme');
        }
      };
      const [token, setToken] = useState("");
      const [user, setUser] = useState({});
      const [playlist, setPlaylist] = useState({});
      const getTokenFromUrl = ()=>{
          // let token = window.localStorage.getItem("token")
            return  window.location.hash
                    .substring(1)
                    .split("&")
                    .reduce((initial, item)=>{
                      let parts = item.split("=");
                      initial[parts[0]] = decodeURIComponent(parts[1])
                      
                      return initial
                    }, {});
                    // find(elem => elem.startsWith("access_token")).split("=")[1]
              // window.localStorage.setItem("token", token)
      } 
        
  function getPlaylist(){
    // spotifyApi.getMyCurrentPlaybackState()
    //   .then((response) => {
    //     setNowPlaying({
    //       nowPlaying: { 
    //           name: response.item.name, 
    //           albumArt: response.item.album.images[0].url
    //         }
    //     });
    //   })
    // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
    //   if (err) console.error(err);
    //   else console.log('Artist albums', data);
    // });

        spotifyApi
        .getUserPlaylists() // note that we don't pass a user id
        .then(
          function (data) {
            setPlaylist(data)
            console.log('User playlists', data);
          },
          function (err) {
            console.error(err);
          }
        );
      }
    const spotifyApi = new SpotifyWebApi();
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);
  
    return (
        <AppContext.Provider 
            value={{ 
                isSidebarOpen,openSidebar,
                user, setUser,
                people, setPeople,
                index, setIndex,
                closeSidebar,toggleTheme,
                token,setToken, theme,
                search,setSearch,
                getTokenFromUrl,
                spotifyApi,
                getPlaylist, playlist
            }}
        >
                {children}
        </AppContext.Provider>
  )
};
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export { AppContext,AppProvider } 