import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import hardware from "../images/hardware2.jpg";
import sql from "../images/microsoft-sql-server.svg";
import msOffice from "../images/microsoft365.jpg";
import webDev from "../images/web-dev.jpeg";
import Nav from "./Nav";

const imgArray = [webDev, hardware, sql, msOffice];
let image = "";
interface ServiceState {
    isDown: boolean;
    clientX: number;
   scrollX: number;
}
interface ExpandService {
    title: string;
    text: any[];
}
interface ContentState {
    title: string;
    text: any[];
}

const Services: React.FC = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<ServiceState>({
        isDown: false,
        clientX: 0,
        scrollX: 0,
    });
    const [expandService, setExpandService] = useState<ExpandService | undefined>(undefined);
    const navColor = expandService ? "white" : "black";
    const expandContent = (e: React.MouseEvent<HTMLButtonElement>, param: number, content: ContentState): void => {
    const bgImage = imgArray[param - 1];
    const {title, text} = content;
    image = bgImage;
    setExpandService({
           title,
           text,
       });
    };
    const resetBtnFn = (e: React.MouseEvent<HTMLDivElement>) => {
        setExpandService(undefined);
        image = "";
    };
    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.persist();
        setState({
            ...state, isDown: true,
            clientX: e.clientX,
        });
        if (divRef.current) {
            divRef.current.style.cursor = "grabbing";
        }
    };

    const onMouseUp = () => {
        setState({ ...state, isDown: false });
        if (divRef.current) {
            divRef.current.style.cursor = "pointer";
        }
    };
    const onMouseLeave = () => {
        setState({ ...state, isDown: false });
        if (divRef.current) {
            divRef.current.style.cursor = "pointer";
        }
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.preventDefault();
        if (!state.isDown) { return; }
        const { clientX, scrollX } = state;
        if (divRef.current) {
            divRef.current.scrollLeft = scrollX - clientX + e.clientX;
            setState({ ...state, clientX: e.clientX, scrollX: scrollX + e.clientX - clientX });
     }
    };
    return (
        <main id="second-color">
            <Nav background="orange" color={navColor} display={true} showServices={false}/>
            {expandService ? <div className="my-services" style={{ backgroundImage: `url(${image})` }}>
                <div id="overlayService">
                    <h1>{expandService.title}</h1>
                    <ul>{
                        expandService.text.map((list, index) =>
                        <li key={index}>{list}</li>,
                        )}</ul>
                    <div className="reset bounce" onClick={resetBtnFn}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                </div>
            </div> : <div id="content">
                <div className="draggable-slider" ref={divRef}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}
                >
                    <div className="slide">
                        <h4>.01</h4>
                        <h4>Web Development</h4>
                        <div className="slide-image" style={{ backgroundImage: `url(${webDev})` }}>
                            <div className="hover">
                            </div>
                            <div className="service-content">
                                <p>We offer courses in web development covering both frontend and backend </p>
                                    <button onClick={(e) => expandContent(e, 1, {
                                        title: "Web Development",
                                        text: ["HTML", "CSS", "Javascript", "NodeJS", "Postgres"],
                                    })}>View Outline</button>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <h4>.02</h4>
                        <h4>Hardware and Networking</h4>
                        <div className="slide-image" style={{ backgroundImage: `url(${hardware})` }} >
                            <div className="hover"></div>
                            <div className="service-content">
                                <p>You can acquire skills in hardware and networking </p>
                                    <button onClick={(e) => expandContent(e, 2, {
                                        title: "Hardware & Networking",
                                        text: ["Introduction to computer", "Basic Networking concepts",
                                            "Introduction to various networking devices",
                                            "Inside the PC", "Network basic and configuration",
                                        "Introduction to servers and network security"],
                                    })}>View Outline</button>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <h4>.03</h4>
                        <h4>MS SQL Server</h4>
                        <div className="slide-image" style={{ backgroundImage: `url(${sql})` }}>
                            <div className="hover"></div>
                            <div className="service-content">
                                <p>Get the skills to setup SQL Server and write scripts for database </p>
                                    <button onClick={(e) => expandContent(e, 3, {
                                        title: "SQL Server",
                                        text: ["SQL Server Basics", "Understanding Tables and Databases", "Indexes and Views", "Database Diagrams, The Query Analyzer and SQL Basics", "Stored Procedures, Triggers and Replication", "Data Transformation Services (DTS), Back Ups/Restores, Users, Roles, Logins and Analysis Manager"],
                                    })}>View Outline</button>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <h4>.04</h4>
                        <h4>MS Office Specialist</h4>
                        <div className="slide-image" style={{ backgroundImage: `url(${msOffice})` }}>
                            <div className="hover"></div>
                            <div className="service-content">
                                <p>Get the skills to function in a working office using MS Office Suite </p>
                                    <button onClick={(e) => expandContent(e, 4, {
                                        title: "Microsoft Office Suite",
                                        text: ["MS Word", "MS Excel", "MS Powerpoint", "MS Access"],
                                    })}>View Outline</button>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        &nbsp;
                   </div>
                </div>
            </div>
        }
    </main>
    );
};

export default Services;
