import React from 'react';

// {title} is a prop that can be passed to child components
// This is called a destructure

const Title = ({titleData}) => {
  // Destructured so we dont need to use titleData.title or titleData.color
  const {title, color} = titleData

  return (
    <h1 style={{color: color}}>

      {title}
    </h1>
  );
};

export default Title;
