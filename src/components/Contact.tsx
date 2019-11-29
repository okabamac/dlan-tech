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
        try {
         const res =  await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formDetails }),
            });
         if (res) {
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
             alert(res); }
        } catch (err) {
            setSubmitResult({
                success: false,
                message: "Oops! Something isn't right, please try again later",
            });
            alert(err);
        }
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
            <Nav color="yellow" display={true} showServices={false} />
            <div id="content">
                <h1>CONTACT</h1>
                <div className="form-content">
                    <div className="form">
                    {submitResult ? <div className="contact-feedback" style={{color: "#fff"}}>
                    <h3>{submitResult.message}</h3>
                    </div> : ""}
                        <form onSubmit={handleSubmit} >
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
                            value={textMessage.message}
                            onChange={updateMessage}
                            />
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
