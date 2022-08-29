import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchForm({token, setArtists, setSearchKey}) {
    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track,artist,album"
            }
        })
        setArtists(data.artists.items)
    }
  return (
    <form onSubmit={searchArtists}>
         <input type="text" onChange={e => setSearchKey(e.target.value)} />
         <button type={"submit"}><FaSearch/></button>
    </form>
  )
}

export default SearchForm