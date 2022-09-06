import React, {useEffect} from 'react'
import axios from "axios";
import { reducerCases } from "../../utils/Constants";
import './result.css'
import profile from '../../assets/profile.jpg'
import { FaPlay, FaStepForward, FaPause, FaStepBackward } from 'react-icons/fa'
import { useGlobalContext } from '../../utils/context';

const Result = () => {
    const [{ token, selectedPlaylist, selectedPlaylistId }, dispatch] = useGlobalContext();
    // console.log(selectedPlaylistId);
    useEffect(() => {
      console.log("ok");
        const getInitialPlaylist = async () => {
          const response = await axios.get(
            `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }

          );
          console.log("result : ",response.data);
          const selectedPlaylist = {
            id: response.data.id,
            name: response.data.name,
            description: response.data.description.startsWith("<a")
              ? ""
              : response.data.description,
            image: response.data.images[0]?.url,
            tracks: response.data.tracks.items.map(({ track }) => ({
              id: track.id,
              name: track.name,
              artists: track.artists.map((artist) => artist.name),
              image: track.album.images[2].url,
              duration: track.duration_ms,
              album: track.album.name,
              context_uri: track.album.uri,
              track_number: track.track_number,
            })),
          };
          dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
        };

        getInitialPlaylist();
      }, [token, dispatch, selectedPlaylistId]);

      const playTrack = async (
        id,
        name,
        artists,
        image,
        context_uri,
        track_number
      ) => {
        const response = await axios.put(
          `https://api.spotify.com/v1/me/player/play`,
          {
            context_uri,
            offset: {
              position: track_number - 1,
            },
            position_ms: 0,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.status === 204) {
          const currentPlaying = {
            id,
            name,
            artists,
            image,
          };
          dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
          dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
        } else {
          dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
        }
      };
      const msToMinutesAndSeconds = (ms) => {
        var minutes = Math.floor(ms / 60000);
        var seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      };
  
    const renderList = () => {
        return selectedPlaylist.tracks.map((
            {
                id,
                name,
                artists,
                image,
                duration,
                album,
                context_uri,
                track_number,
          }, 
            index) => (
            <tr key={id} className="main-wrapper" onClick={() =>
                playTrack(
                  id,
                  name,
                  artists,
                  image,
                  context_uri,
                  track_number
                )
              }>
                    <td>{index + 1}</td>
                    <td className="track-title">
                    {image ? <img className='track-img now-playing__cover' src={image} alt="Track" />: <div>No Image</div>}
                        <div className="now-playing__side">
                            <b className="now-playing__name">{name}</b>
                            <small className="now-playing__album">{album}</small>
                            <small className="now-playing__artist">{artists}</small>
                        </div>
                    </td>
                    <td className="artist">{artists}</td>
                    <td className="album">{album}</td>
                    <td>
                        <span>{msToMinutesAndSeconds(duration)}</span>
                    </td>
            </tr>
        ))
      }
      console.log("Playlist active : ",selectedPlaylist);
  return (
    <div className='tracks'>
        <h2>Tracks</h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th className="album">Album</th>
                    <th className='artist'>Artist</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                 {selectedPlaylist ? renderList() 
                    : <tr>
                        <td>
                          aucun playlist selectionne

                        </td>
                    </tr> 

                 }
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