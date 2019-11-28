import { faCodepen, faFacebook, faGithub,  faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Nav from "./Nav";

const Contact: React.FC = () => {
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [textAreaValue, setTextAreaValue] = useState<string>("");
    const updateField = (e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <main style={{ backgroundColor: "#333" }}>
            <Nav color="yellow" display={true} showServices={false} />
            <div id="content">
                <h1>CONTACT</h1>
                <div className="form-content">
                    <div className="form">
                        <form>
                            <input
                                type="text"
                                value={formFields.name}
                                placeholder="Name"
                                name="name"
                                required
                                onChange={updateField}
                            />
                            <input type="email"
                            placeholder="Email"
                            name="email"
                            value={formFields.email}
                            onChange={updateField}
                            />
                            <textarea rows={10}
                            placeholder="Message"
                            name="message"
                            required
                            value={textAreaValue}
                                onChange={(
                                    ev: React.ChangeEvent<HTMLTextAreaElement>,
                                ): void => setTextAreaValue(ev.target.value)}/>
                        <button className="send-btn">Send</button>
                        </form>
                    </div>
                    <div className="contact-details">
                        <div>
                            <p className="contact-list"><FontAwesomeIcon icon={faMapMarker} />
                                <span>
                                219, Gado Nasko Road, Beside First Bank, Kubwa, Abuja</span></p>
                                <p><FontAwesomeIcon icon={faPhone} />
                                    <span>
                                        <a href="tel:+2349059564447" title="Give us a call">(+234) 09059564447</a>
                                        </span></p>
                                <p><FontAwesomeIcon icon={faEnvelope} />
                                    <span><a href="mailto:#" title="Send us an email">
                                    dlan.officecafe@gmail.com</a></span></p>
                        </div>
                        <hr/>
                        <ul className="social-media-list">
                            <li><a href="#" target="_blank" className="contact-icon">
                                <FontAwesomeIcon icon={faGithub} /></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <FontAwesomeIcon icon={faTwitter} /></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <FontAwesomeIcon icon={faFacebook} /></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <FontAwesomeIcon icon={faCodepen} /></a>
                            </li>
                        </ul>
                        <hr/>
                        <div className="copyright">&copy; DLAN TECHNOLOGIES, 2019</div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
