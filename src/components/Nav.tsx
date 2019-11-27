import * as React from "react";
import { useState } from "react";
import {  NavLink, RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
    underline?: string;
    color?: string;
    display?: boolean;
    showServices?: boolean;
}

const Nav = withRouter(({ history, underline, color, display, showServices }: Props) => {
    const [navOpened, setNavOpened] = useState(false);
    const navClassNames = navOpened ? "nav-links nav-active" : "nav-links";
    const toggle = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!showServices) {
            return setNavOpened(!navOpened);
        }
        return history.push("/services");
    };
    return (
        <>
            <div style={{ display: display ? "block" : "none", color: color === "yellow" ? "#fff" : "#333" }}>
            <h5>
                dlan <span className="rec-txt-black">Technologies</span></h5>
            <nav className={navClassNames}>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/services" activeClassName="current" id={underline === "services" ? "underline" : ""}>
                        Services</NavLink>
                    <NavLink to="/contact" activeClassName="current" id={underline === "contact" ? "underline" : ""}>
                        Contact us</NavLink>
            </nav>
            </div>
            <div id="hamburger-icon" className={color} onClick={toggle}>
                <div className="btn-line line-1"></div>
                <div className="btn-line line-2"></div>
                <div className="btn-line line-3"></div>
            </div>
        </>
    );
});

export default Nav;
