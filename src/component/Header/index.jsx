import React,{ useEffect, useState} from 'react'
import SearchForm from '../SearchForm'
import './header.css'
import axios from "axios";
import { useGlobalContext } from '../../utils/context';
import {MdLightMode,MdOutlineLightMode} from 'react-icons/md'
import { FaBars } from 'react-icons/fa';
import { AsyncPaginate } from 'react-select-async-paginate';
import profile from '../../assets/profile.jpg'
import { reducerCases } from "../../utils/Constants";

const Header = () => {
  const [ {theme,toggleTheme,isSidebarOpen, searchKey,token, userInfo}, dispatch]    = useGlobalContext()
      useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);  
      }, [theme]);

        const loadOptions = async (inputValue) => {
          let type = "album,artist,track"
          const response = await axios.get(
            `https://api.spotify.com/v1/search?q=${searchKey}&type=${type}`,
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }

          );
          return{
            options: response.data.tracks.items.map((track)=>{
              return{
                  value: `${track.id}`,
                  label: `${track.data.name}`
              };
          }),
          } 
          
        };


  return (
    <header>
        <div>
          <button onClick={()=>{
            let value = true;
            dispatch({ type: reducerCases.OPEN_SIDE_BAR, value } );
          }
          } className='sidebar-toggle'>
            <FaBars />
          </button>
        </div>
        {/* <AsyncPaginate
            placehoder="Search"
            debounceTimeOut={600}
            value={searchKey}
            onChange={()=>{
                dispatch({ type: reducerCases.SET_SEARCHKEY, searchKey: searchKey });
            }}
            loadOptions={loadOptions}
        /> */}
        <button onClick={()=>console.log(loadOptions())}>test</button>
        <nav className="menu-container">
                <div className="user-profile">
                  <a href={userInfo?.userUrl}>
                    <img className="user-profile-image" src={userInfo?.profile} alt="profile" /> 
                  </a>
                    <div className='user-profile-status'>
                        <h6>Profile Spotify</h6>
                        <small>{userInfo?.name}</small>
                        <small>{userInfo?.type}</small>
                    </div>
                </div>
                <div className="nav-center">
                    <div className="btn btn-theme" onClick={()=>{
                        let value = theme==='dark-theme' ? 'light-theme' : 'dark-theme'
                        dispatch({ type: reducerCases.TOGGLE_THEME, value} );
                      
                    }}>
                      {theme==="light-theme"? <MdOutlineLightMode/> : <MdLightMode/> }
                    </div>
                </div>
        </nav>
    </header>
  )
}

export default Header