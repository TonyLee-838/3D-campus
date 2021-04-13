import React, { useEffect } from "react";

// components
import AppScene from "../basic/AppScene";
import Books from "./Books";
// import BookShelf from "./Bookshelf-backup";
import Bookshelf from "./Bookshelf";
import Ceiling from "./Ceiling";
import Circles from "./Circles";
import Desk from "./Desk";
import Floor from "./Floor";
import Monitor from "./Monitor";
import Wall from "./Wall";
import Room from "./Room";

const StudioScene = () => {
  return (
    <AppScene>
      <Books />
      {/* <Room /> */}
      <Bookshelf />
      <Circles />
      <Ceiling />
      <Desk />
      <Monitor />
      <Wall rotationY={0} />
      <Wall rotationY={Math.PI / 2} />
      <Wall rotationY={-Math.PI / 2} />
      <Wall rotationY={Math.PI} />
      <Floor />
    </AppScene>
  );
};

export default StudioScene;
