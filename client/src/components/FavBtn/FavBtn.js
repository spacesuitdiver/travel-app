import React from "react";
import "./FavBtn.css";

<<<<<<< HEAD
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const FavBtn = props => (
  <span className="fave-button btn" {...props}>
    FAVORITE ❤️
=======
const FavBtn = props => (
  <span className="fave-button btn" {...props}>
    FAVORITE <span role="img" aria-labelledby="heart">❤️</span> 
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
  </span>
);

export default FavBtn;
