import React, { useEffect } from 'react'
import './sidebar.css'
import { useGlobalContext } from '../../context';
import { FaTimes } from 'react-icons/fa';
import { social, links, logo } from '../../data';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
    useEffect(()=>{
            
    })
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
        <img src={logo} className='logo' alt='DM dev' />
        <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
        </button>
        </div>
        {/* <h3>Test</h3> */}
        <ul className='links'>
        {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
            <li key={id}>
                <a href={url}>
                {icon}
                {text}
                </a>
            </li>
            );
        })}
        </ul>
        <ul className='links'>
        {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
            <li key={id}>
                <a href={url}>
                {icon}
                {text}
                </a>
            </li>
            );
        })}
        </ul>
        <ul className='social-icons'>
        {social.map((link) => {
            const { id, url, icon } = link;
            return (
            <li key={id}>
                <a href={url}>{icon}</a>
            </li>
            );
        })}
        </ul>
    </aside>
  )
}

export default Sidebar