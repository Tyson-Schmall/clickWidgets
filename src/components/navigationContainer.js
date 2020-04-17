import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div className="links-wrapper">
        <div className="link">
            <Link exact="true" to="/">
                Home
            </Link>
        </div>

        <div className="link">
            <Link to="/align">
                Align
            </Link>
        </div>

        <div className="link">
            <Link to="/clock">
                Clock
            </Link>
        </div>

        <div className="link">
            <Link to="/color">
                Color
            </Link>
        </div>

        <div className="link">
            <Link to="/counter">
                Counter
            </Link>
        </div>

        <div className="link"> 
            <Link to="/grow">
                Grow
            </Link>
        </div>

        <div className="link">
            <Link to="/hidden">
                Hidden
            </Link>
        </div>

        <div className="link">
            <Link to="/toggle">
                Toggle
            </Link>
        </div>

    </div>
  );
}