import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./pageNotFound.css";
const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h4>Oops page not found !!</h4>
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
      <div className="image-display">
        <img src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/613e3ae0f06fe0e1dac6be4e_love-and-family-card-image-export-v0.png"></img>
      </div>
    </div>
  );
};

export default PageNotFound;
