import React from "react";
interface Props {
    underline?: string;
}
const Nav: React.FC<Props> = ({underline}) => {
    return (
            <nav>
                <h5>dlan <span className="rec-txt-black">Technologies</span></h5>
                <span id="links">
                <a href="#" className="link">Home</a>
                <a href="#" className="link" id={underline === "services" ? "underline" : ""}>Services</a>
                <a href="#" className="link" id={underline === "contact" ? "underline" : ""}>Contact us</a>
                </span>
            </nav>
    );
};

export default Nav;
