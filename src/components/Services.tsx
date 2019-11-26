import React, { useRef, useState } from "react";
import Nav from "./Nav";

const Services: React.FC = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [state, setState] = useState({
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
        <main style={{ backgroundColor: "#ffdc25"}}>
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
                       <h3>Basic</h3>
                       <div className="slide-image">1</div>
                   </div>
                   <div className="slide">
                        <h3>.02</h3>
                        <h3>Basic</h3>
                       <div className="slide-image">2</div>
                   </div>
                   <div className="slide">
                        <h3>.03</h3>
                        <h3>Basic</h3>
                       <div className="slide-image">3</div>
                   </div>
                   <div className="slide">
                        <h3>.04</h3>
                        <h3>Basic</h3>
                       <div className="slide-image">4</div>
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
