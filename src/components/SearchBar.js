// useState is a hook
import React, {useState, useEffect} from 'react';

const SearchBar = () => {
  // need to put () or else a variable
  // Good practice to provide inital useState value
  const [searchTerm, setSearchTerm] = useState('')
  console.log(searchTerm);


  return (
    <div>
      <input type="search" placeholder="This is the searchbar" onChange={event => setSearchTerm(event.target.value)}/>
      <div>
        <h3>{searchTerm}</h3>
      </div>
    </div>
  );
};

export default SearchBar;
