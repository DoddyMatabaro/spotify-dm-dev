import React,{ useEffect, useState} from 'react'
import './header.css'


const Header = ({token, setToken}) => {
      const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

  return (
    <header>
        <img src='/logo.png' alt='DM dev.'/>
        <nav className="App-header">
                {token ?<button onClick={logout}>Logout</button> : null}
        </nav>
    </header>
  )
}

export default Header