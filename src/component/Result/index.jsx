import React from 'react'
import './result.css'
import profile from '../../assets/profile.jpg'


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
                        <b>Ex On Fire</b>
                    </td>
                    <td className="track-album"><small>Only by the Night</small></td>
                    <td>type</td>
                    <td>play</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td className="track-title">
                        <img className='track-img' src={profile} alt="Track" />
                        <b>Ex On Fire</b>
                    </td>
                    <td className="track-album"><small>Only by the Night</small></td>
                    <td>type</td>
                    <td>play</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Result