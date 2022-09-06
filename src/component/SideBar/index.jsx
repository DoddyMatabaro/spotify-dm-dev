import React, { useEffect } from 'react'
import './sidebar.css'
import { useGlobalContext } from '../../utils/context';
import { FaTimes } from 'react-icons/fa';
import { RiPlayListLine } from 'react-icons/ri';
import { social, links, logo } from '../../data';
import axios from "axios";
import { reducerCases } from "../../utils/Constants";

function Sidebar() {
    const [{ token, playlists,isSidebarOpen }, dispatch] = useGlobalContext();
    useEffect(() => {
        const getPlaylistData = async () => {
        const response = await axios.get(
            "https://api.spotify.com/v1/me/playlists",
            {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
            }
        );
        const { items } = response.data;
        const playlists = items.map(({ name, id }) => {
            return { name, id };
        });
        dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        };
        getPlaylistData();
    }, [token, dispatch]);
    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    };
    console.log(playlists);
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
        <img src={logo} className='logo' alt='DM dev' />
        <button className='close-btn' onClick={()=>{
            let value = false;
            dispatch({ type: reducerCases.OPEN_SIDE_BAR, value } );
          }
          }>
            <FaTimes />
        </button>
        </div>
        {/* <h3>Test</h3> */}
        <ul className='links'>
        {playlists.map(({ name, id }) => {
            return (
           
           <li className="link" key={id} onClick={() => changeCurrentPlaylist(id)} >
                <RiPlayListLine/>
                {name}
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