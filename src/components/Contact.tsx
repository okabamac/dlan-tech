import React, { useState } from "react";
import Nav from "./Nav";

const Contact: React.FC = () => {

    return (
        <main style={{ backgroundColor: "#333" }}>
            <Nav color="yellow" display={true} showServices={false} />
            <div id="content">
                <h1>CONTACT</h1>
                <div className="form-content">
                    <div className="form">
                        <form>
                            <input type="text" placeholder="Name" name="name" value=""></input>
                            <input type="email" placeholder="Email" name="email" value=""></input>
                            <textarea rows={10} placeholder="Message" name="message" value=""></textarea>
                        <button className="send-btn">Send</button>
                        </form>
                    </div>
                    <div className="contact-details">
                        <div>
                            <p>219 Gado Nasko Road, Beside First Bank Nigeria, Kubwa, Abuja</p>
                            <p>+2349059564447</p>
                            <p>dlan.officecafe@gmail.com</p>
                        </div>
                        <hr>
                        </hr>
                        <hr>
                        </hr>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
