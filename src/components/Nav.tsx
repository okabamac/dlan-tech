import * as React from "react";
import { useState } from "react";
import {  NavLink, RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
    color?: string;
    background?: string;
    display?: boolean;
    showServices?: boolean;
}

const Nav = withRouter(({ history, color, display, showServices, background }: Props) => {
    const [navOpened, setNavOpened] = useState(false);
    const [flickHmbg, setFlickHmbr] = useState(false);
    const navClassNames = navOpened ? "nav-links nav-active" : "nav-links";
    const hamburgerClass = flickHmbg ? `${color} flick` : `${color}`;
    const toggle = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!showServices) {
            setFlickHmbr(!flickHmbg);
            setNavOpened(!navOpened);
            return;
        }
        return history.push("/services");
    };
    return (
        <>
            <div style={{ display: display ? "block" : "none", zIndex: 1000,
            color: color === "white" ? "#fff" : "#333", position: "absolute",
            width: "100vw", top: "-2em"}}>
            <div className="logo">
                <h5>
                dlan <span className="rec-txt-black">Technologies</span></h5>
            </div>
                <nav className={navClassNames} id={background}>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/services" activeClassName="current">
                        Services</NavLink>
                    <NavLink to="/contact" activeClassName="current">
                        Contact Us</NavLink>
            </nav>
            </div>
            <div id="hamburger-icon" className={hamburgerClass} style={{zIndex: 2001}} onClick={toggle}>
                <div className="btn-line line-1"></div>
                <div className="btn-line line-2"></div>
                <div className="btn-line line-3"></div>
            </div>
        </>
    );
});

export default Nav;
