import Slideshow from "./slidershow";
import Nav from "./nav";
import React from "react";
import GameList from "./gamelist";

const App = () => {
  
  return (
    <React.Fragment>
      <Slideshow />
      <Nav/>
      <GameList/>
    </React.Fragment>
  );
};

export default App;
