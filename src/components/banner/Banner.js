import React from "react";
import "./styles.css";

function Banner(props) {
  return (
    <div className="bannerContainer">
      <img src={props.bannerImg} alt={props.desc} />
    </div>
  );
}

export default Banner;
