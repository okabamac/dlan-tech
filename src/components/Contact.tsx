import { faCodepen, faFacebook, faGithub,  faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Nav from "./Nav";

interface User {
    name: string;
    email: string;
}
interface Message {
    message: string;
}
interface SubmitResult {
    success: boolean;
    message: string;
}
const Contact: React.FC = () => {
    const [formFields, setFormFields] = useState<User>({
        name: "",
        email: "",
    });
    const [textMessage, setTextMessage] = useState<Message>({
        message: "",
    });
    const [submitResult, setSubmitResult ] = useState<SubmitResult | undefined >(undefined);
    const encode = (data: { [x: string]: string | number | boolean; }) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };
    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        e.preventDefault();
        const formDetails = {name: formFields.name, email: formFields.email, message: textMessage.message};
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formDetails }),
        })
            .then(() => {
                setSubmitResult({
                 success: true,
                 message: "Thanks for contacting us!",
             });
                setFormFields({
                 name: "",
                 email: "",
             });
                setTextMessage({
                 message: "",
             });
            })
            .catch((error) => {
                setSubmitResult({
                success: false,
                message: "Oops! Something isn't right, please try again later",
            });
            });
        e.preventDefault();
        // if (this.validateForm()) {
        //     const submitSuccess: boolean = await this.submitForm();
        //     this.setState({ submitSuccess });
        // }
    };
    const updateField = (e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };
    const updateMessage = (e: React.ChangeEvent<HTMLTextAreaElement>,
    ): void => {
        setTextMessage({
            ...textMessage,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <main style={{ backgroundColor: "#333" }}>
            <Nav background="black" color="white" display={true} showServices={false} />
            <div id="content">
                <h1>CONTACT</h1>
                <div className="form-content">
                    <div className="form">
                    {submitResult ? <div className="contact-feedback" style={{color: "#fff"}}>
                    <h3>{submitResult.message}</h3>
                    </div> : ""}
                        <form onSubmit={handleSubmit} >
                            <div>
                                <input
                                    type="text"
                                    value={formFields.name}
                                    name="name"
                                    required
                                    onChange={updateField}
                                />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    value={formFields.email}
                                    name="email"
                                    required
                                    onChange={updateField}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div>
                            <textarea rows={9}
                            name="message"
                            required
                            value={textMessage.message}
                            onChange={updateMessage}
                            />
                                <label htmlFor="message">Message</label>
                            </div>
                            <div>
                        <button className="send-btn">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-details">
                        <div>
                            <p className="contact-list"><FontAwesomeIcon icon={faMapMarker} />
                                <span>
                                219, Gado Nasko Road, Beside First Bank, Kubwa, Abuja</span></p>
                                <p><FontAwesomeIcon icon={faPhone} />
                                    <span>
                                    <a href="tel:+2349059564447" title="Give us a call">(+234) 09059564447</a>, &nbsp;
                                         <a href="tel:+2348175833014" title="Give us a call">(+234) 08175833014</a>
                                        </span></p>
                                <p><FontAwesomeIcon icon={faEnvelope} />
                                    <span><a href="mailto:#" title="Send us an email">
                                    info@dlan.tech</a></span></p>
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
