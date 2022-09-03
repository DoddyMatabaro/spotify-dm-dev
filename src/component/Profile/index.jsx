import React, { useState, useEffect} from 'react';
import profile from '../../assets/profile.jpg'
import Result from '../Result';
import './profile.css';
import { useGlobalContext } from '../../context';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';


const Profile = ({artists, token}) => { 
  const { index,setIndex, people, setPeople } = useGlobalContext();
  
    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, people]);

      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);

  return (
    <section className="section">
        <div className="title">
          <h2>
            Artist
          </h2>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    // <div className='profile'>
            /* <div className="artist">
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
              
            </div> */
            /* <Result artists={artists}  token={token} /> */
    // </div>
    // <>
    //      <div className="container">
    //         <div className="main-wrapper">
    //             <img src={current_track.album.images[0].url} 
    //                  className="now-playing__cover" alt="" />

    //             <div className="now-playing__side">
    //                 <div className="now-playing__name">{
    //                               current_track.name
    //                               }</div>

    //                 <div className="now-playing__artist">{
    //                               current_track.artists[0].name
    //                               }</div>
    //             </div>
    //                 <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
    //                 &lt;&lt;
    //               </button>

    //               <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
    //                   { is_paused ? "PLAY" : "PAUSE" }
    //               </button>

    //               <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
    //                     &gt;&gt;
    //               </button>
    //         </div>
    //     </div>
    // </>
  )
}

export default Profile