import React from 'react'
import './result.css'
import profile from '../../assets/profile.jpg'
import { FaPlay } from 'react-icons/fa'

const Result = ({artists}) => {
    
    const renderArtists = () => {
        return artists.map((track, index) => (
            <tr key={track.id}>
                    <td>{index}</td>
                    <td className="track-title">
                    {track.album.images.length ? <img className='track-img' src={track.album.images[0].url} alt="Track" />: <div>No Image</div>}
                        <div>
                            <b>{track.name}</b>
                            <small>{track.album.name}</small>
                        </div>
                    </td>
                    <td className="album">{track.album.name}</td>
                    <td>type</td>
                    <td><FaPlay /></td>
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