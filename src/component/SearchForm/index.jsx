import React from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
function SearchForm({token, setArtists, setSearchKey, searchKey}) {
    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })
        setArtists(data.tracks.items)
    }
  return (
    <form onSubmit={searchArtists}>
         <input type="text" onChange={e => setSearchKey(e.target.value)} />
         <button type={"submit"}><FaSearch/></button>
    </form>
  )
}

export default SearchForm