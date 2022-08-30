import React from 'react'
import './result.css'
import profile from '../../assets/profile.jpg'
import { FaPlay } from 'react-icons/fa'

const Result = () => {
  return (
    <div className='tracks'>
        <h2>Top tracks</h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th className="album">Album</th>
                    <th>Type</th>
                    <th>-</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td className="track-title">
                        <img className='track-img' src={profile} alt="Track" />
                        <div>
                            <b>Ex On Fire</b>
                            <small>Only by the Night</small>
                        </div>
                    </td>
                    <td className="album">Only by the Night</td>
                    <td>type</td>
                    <td><FaPlay /></td>
                </tr>
                
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