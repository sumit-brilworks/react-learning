import React from "react";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    console.log("This code is running for mounting ");
    return () => {
      console.log("The code is running for unmounting also");
    };
  });
  return null;
  return <div>Navbar component</div>;
}

export default Navbar;
