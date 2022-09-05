import React,{ useEffect, useState} from 'react'
import SearchForm from '../SearchForm'
import './header.css'
import { useGlobalContext } from '../../utils/context';
import {MdLightMode,MdOutlineLightMode} from 'react-icons/md'
import { FaBars } from 'react-icons/fa';
import { AsyncPaginate } from 'react-select-async-paginate';
import profile from '../../assets/profile.jpg'


const Header = ({token, user, setToken, setSearchKey, setArtists, searchKey}) => {
  const { theme,toggleTheme,openSidebar, search, setSearch, urlSpotify, searchType, seSearchType  }  = useGlobalContext()
      // theme
      useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
      }, [theme]);
          
  const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
  }

  return (
    <header>
        <div>
          <button onClick={openSidebar} className='sidebar-toggle'>
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
        {/* <SearchForm searchKey={searchKey} token={token}  setArtists={setArtists} setSearchKey={setSearchKey} /> */}
        <nav className="menu-container">
                <div className="user-profile">
                    <img className="user-profile-image" src={profile} alt="profile" /> 
                    <div className='user-profile-status'>
                        <h6>Profile Spotify</h6>
                        <small>Doddy Matabaro</small>
                        <small>User Free</small>
                    </div>
                </div>
                {/* {token ?<button onClick={logout}>Logout</button> : null} */}
                <div className="nav-center">
                    <div className="btn" onClick={toggleTheme}>
                      {theme==="light-theme"? <MdOutlineLightMode/> : <MdLightMode/> }
                    </div>
                </div>
        </nav>
    </header>
  )
}

export default Header