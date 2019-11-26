import React, { useState } from "react";
interface Props {
    underline?: string;
    color?: string;
    display?: boolean;
    showServices?: boolean;
}
const Nav: React.FC<Props> = ({underline, color, display, showServices}) => {
    const [navOpened, setNavOpened] = useState(false);
    const navClassNames = navOpened ? "nav-links nav-active" : "nav-links";
    const toggle = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!showServices) {
            return setNavOpened(!navOpened);
        }
    };
    return (
        <>
        <h5 style={{display: display ? "block" : "none" }}>dlan <span className="rec-txt-black">Technologies</span></h5>
            <nav className={navClassNames}>
                <div id="links">
                <a href="#" className="link">Home</a>
                <a href="#" className="link" id={underline === "services" ? "underline" : ""}>Services</a>
                <a href="#" className="link" id={underline === "contact" ? "underline" : ""}>Contact us</a>
                </div>
            </nav>
            <div id="hamburger-icon" className={color} onClick={toggle}>
                <div className="btn-line line-1"></div>
                <div className="btn-line line-2"></div>
                <div className="btn-line line-3"></div>
            </div>
            </>
    );
};

export default Nav;
