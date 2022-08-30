import React,{ useEffect, useState} from 'react'
import SearchForm from '../SearchForm'
import './header.css'


const Header = ({token, setToken, setSearchKey, setArtists, searchKey}) => {
      const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

  return (
    <header>
        <img src='/logo.png' alt='DM dev.'/>
        <SearchForm searchKey={searchKey} token={token}  setArtists={setArtists} setSearchKey={setSearchKey} />
        <nav className="App-header">
                {token ?<button onClick={logout}>Logout</button> : null}
        </nav>
    </header>
  )
}

export default Header