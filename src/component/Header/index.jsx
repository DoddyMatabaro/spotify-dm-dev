import React,{ useEffect, useState} from 'react'
import SearchForm from '../SearchForm'
import './header.css'
import { useGlobalContext } from '../../utils/context';
import {MdLightMode,MdOutlineLightMode} from 'react-icons/md'
import { FaBars } from 'react-icons/fa';
import { AsyncPaginate } from 'react-select-async-paginate';
import profile from '../../assets/profile.jpg'
import { reducerCases } from "../../utils/Constants";

const Header = () => {
  const [ {theme,toggleTheme,isSidebarOpen, userInfo}, dispatch]    = useGlobalContext()
      useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
      }, [theme]);
       
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
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        /> */}
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