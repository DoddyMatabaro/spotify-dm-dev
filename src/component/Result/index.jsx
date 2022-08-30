import React, { useState, useEffect} from 'react'
import './result.css'
import profile from '../../assets/profile.jpg'
import { FaPlay, FaStepForward, FaPause, FaStepBackward } from 'react-icons/fa'

const Result = ({artists, token}) => {
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const track = {
      name: "",
      album: {
          images: [
              { url: "" }
          ]
      },
      artists: [
          { name: "" }
      ]
  }
    function takeTrack(selectedTrack){
        useState();
    }
    const [current_track, setTrack] = useState(track);
    console.log(current_track);
    const [player, setPlayer] = useState(undefined);
  
      console.log(artists);
  
      useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
  
        document.body.appendChild(script);
  
        window.onSpotifyWebPlaybackSDKReady = () => {
  
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5
            });
  
            setPlayer(player);
  
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });
  
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });
  
              player.addListener('player_state_changed', ( state => {
  
                    if (!state) {
                        return;
                    }
                
                    setTrack(state.track_window.current_track);
                    setPaused(state.paused);
                    player.getCurrentState().then( state => { 
                        (!state)? setActive(false) : setActive(true) 
                    });
              
              }));
            player.connect();
  
        };
      }, []);
  
    const renderArtists = () => {
        return artists.map((track, index) => (
            <tr key={track.id} className="main-wrapper">
                    <td>{index}</td>
                    <td className="track-title">
                    {track.album.images.length ? <img className='track-img now-playing__cover' src={track.album.images[0].url} alt="Track" />: <div>No Image</div>}
                        <div className="now-playing__side">
                            <b className="now-playing__name">{track.name}</b>
                            <small className="now-playing__artist">{track.album.name}</small>
                        </div>
                    </td>
                    <td className="album">{track.album.name}</td>
                    <td>type</td>
                    <td className='btns'>
                        <FaStepBackward onClick={() => { 
                                
                                player.previousTrack() 
                            }}
                        />

                        {is_paused ? 
                            <FaPlay onClick={() => { player.togglePlay() }}/>
                            : <FaPause onClick={() => { player.togglePlay() }}/>
                        }
                        <FaStepForward  onClick={() => { player.nextTrack() }} />
                    
                    </td>
            </tr>
        ))
      }
  return (
    <div className='tracks'>
        <h2>Top tracks</h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th className="album">Album</th>
                    <th>Time</th>
                    <th>-</th>
                </tr>
            </thead>
            <tbody>
                 {renderArtists()}
            </tbody>

        </table>

        {/* album */}

        <div className='albums-result'>
            <div className='albums-result_header'>
                <div className='header-left'>
                    <h2>Albums</h2>
                    <small>Date</small>
                </div>
                <div className="header-right">
                    <h3>SEE ALL</h3>
                    <ul>
                        <li>Prev</li>
                        <li>Next</li>
                    </ul>
                </div>    
            </div>
            <div className='albums-result_cards'>
                <article className='card'>
                    <img src={profile} className='card-image' alt='Cover' />
                    <div className='card-descriptions'>
                        <p>Sophie Ellis-Boxfor</p>
                        <small>Kids See Ghost 2018</small>
                    </div>
                </article>
                <article className='card'>
                    <img src={profile} className='card-image' alt='Cover' />
                    <div className='card-descriptions'>
                        <p>Sophie Ellis-Boxfor</p>
                        <small>Kids See Ghost 2018</small>
                    </div>
                </article>
            </div>
        </div>
    </div>
  )
}

export default Result