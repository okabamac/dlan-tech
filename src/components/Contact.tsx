import React, { useRef, useState } from "react";
import Hamburger from "./Hamburger";
import Nav from "./Nav";

const Contact: React.FC = () => {

    return (
        <main>
            <Nav />
            <Hamburger color="black"/>
            <div id="content">
            </div>
        </main>
    );
};

export default Contact;
