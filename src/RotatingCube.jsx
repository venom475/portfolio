import React from "react";
import "./RotatingCube.css";

const RotatingCube = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="face face-front">A</div>
        <div className="face face-back">K</div>
        <div className="face face-top">L</div>
        <div className="face face-bottom">A</div>
        <div className="face face-right">H</div>
        <div className="face face-left">I</div>
      </div>
    </div>
  );
};

export default RotatingCube;
