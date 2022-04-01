import React from 'react';

const Search = ({ search, handleSearchUpdate }) => {
  return (
    <label>
      Filtrer vos robots par nom
      <input type="text" value={search} onChange={(event) => handleSearchUpdate(event.target.value)} />
    </label>
  )
}

export default Search;