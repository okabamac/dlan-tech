import React, { useState } from "react";
import Nav from "./Nav";

const Contact: React.FC = () => {

    return (
        <main style={{ backgroundColor: "#333" }}>
            <Nav underline="contact" color="white" display={true}/>
            <div id="content">
            </div>
        </main>
    );
};

export default Contact;
