import React from "react";

const Nav: React.FC = () => {
    return (
            <nav>
                <h5>dlan <span className="rec-txt-black">Technologies</span></h5>
                <span id="links">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Contact us</a>
                </span>
            </nav>
    );
};

export default Nav;
