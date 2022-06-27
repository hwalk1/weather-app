import React from 'react';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';

const Home = () => {
  // Any JS can be performed outside the return
  const titleData = {
    title: 'Weather App',
    color: 'red',
  };

  return (
    // Anything inside should here be HTML
    <div>
      {/* We are passing title data from parent Home to child Title */}
      <Title titleData={titleData} />
      <SearchBar />
    </div>
  );
};

// Taken everything inside Home and sharing it to app.js
export default Home;
