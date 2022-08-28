import React from 'react';
import profile from '../../assets/profile.jpg'
import Result from '../Result';
import './profile.css';

const Profile = () => {
  return (
    <div className='profile'>
            <div className="artist">
                <img src={profile} className="artist-profile" alt="Profile" />
                <div className="artist-details">
                    <small className='details-title'>Artist</small>
                    <strong className="details-name">Doddy Matabaro</strong>
                    <p> 15 albums - 1080 tracks</p>
                </div>
                <div className='profile-type'>
                    <article>Rock</article>
                    <article>Indian Rock</article>
                    <article>Southem Rock</article>
                    <article>Southem Rock</article>
                    <article>Southem Rock</article>
                </div>
                <div className='profile-buttons'>
                        <div className="btn btn-primary">Play</div>
                        <div className="btn btn-secondary">Follow</div> 
                </div>
                <ul className='sort-links'>
                    <li ><a href='#'>General</a></li>
                    <li ><a href='#'>Tracks</a></li>
                    <li ><a href='#'>Albums</a></li>
                    <li ><a href='#'>Similar</a></li>
                </ul>
                <hr/>
              
            </div>
            <Result />
    </div>
  )
}

export default Profile