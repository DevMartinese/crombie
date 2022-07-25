import React from "react";
import FruitsVotes from "./components/FruitsVotes";
import ImageGallery from "./components/ImageGallery";

function App() {
  const urls = ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'];
  const fruits = [{name: 'banana', votes: 0}, {name: 'apple', votes: 0}];

  return (
    <>
      {/* First Solution */}
      <ImageGallery urls={urls} />

      {/* Second Solution */}
      <FruitsVotes fruits={fruits} />
    </>
  );
}

export default App;
