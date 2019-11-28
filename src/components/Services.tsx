import React, { useRef, useState } from "react";
import hardware from "../images/hardware2.jpg";
import sql from "../images/microsoft-sql-server.svg";
import msOffice from "../images/microsoft365.jpg";
import webDev from "../images/webdev2.jpeg";
import Nav from "./Nav";

interface ServiceState {
    isDown: boolean;
    clientX: number;
    scrollX: number;
}
const Services: React.FC = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<ServiceState>({
        isDown: false,
        clientX: 0,
        scrollX: 0,
    });
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
        <main style={{ backgroundColor: "orange"}}>
            <Nav underline="services" color="black" display={true} showServices={false}/>
            <div id="content">
                <div className="draggable-slider" ref={divRef}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}
                    >

                   <div className="slide">
                        <h3>.01</h3>
                        <h3>Web Development</h3>
                       <div className="slide-image">
                           <div className="hover"></div>
                            <img src={webDev} />
                       </div>
                   </div>
                   <div className="slide">
                        <h3>.02</h3>
                        <h3>Hardware and Networking</h3>
                       <div className="slide-image">
                            <img src={hardware} />
                       </div>
                   </div>
                   <div className="slide">
                        <h3>.03</h3>
                        <h3>MS SQL Server</h3>
                       <div className="slide-image">
                            <img src={sql} />
                       </div>
                   </div>
                    <div className="slide">
                        <h3>.04</h3>
                        <h3>MS Office Specialist</h3>
                        <div className="slide-image">
                            <img src={msOffice} />
                        </div>
                    </div>
                   <div className="slide">
                        &nbsp;
                   </div>
               </div>
            </div>
        </main>
    );
};

export default Services;
