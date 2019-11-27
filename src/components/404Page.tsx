import React from "react";
import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <header className="App-header">
            <section className="landing-section">
                <h1>404</h1>
                <h2>Page Not found</h2>
                <p>Return to <NavLink to="/">home</NavLink> </p>
            </section>
        </header>
    );
};

export default NotFound;
