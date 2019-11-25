import React, { useRef, useState } from "react";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

const Contact: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
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
    };

    const onMouseUp = () => {
        setState({ ...state, isDown: false });
    };
    const onMouseLeave = () => {
        setState({ ...state, isDown: false });
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
        // e.persist();
        if (!state.isDown) { return; }
        const { clientX, scrollX } = state;
        if (ref.current) {
            // console.log(ref.current.scrollLeft);
            ref.current.scrollLeft = scrollX + e.clientX - clientX;
            console.log(ref.current.scrollLeft, scrollX + e.clientX - clientX);
            // state.scrollX = scrollX + e.clientX - clientX;
            // state.clientX = e.clientX;
        }
    };
    return (
        <main>
            <Nav />
            <div id="content">
                <div className="draggable-slider" ref={ref}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}>
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
                </div>
            </div>
        </main>
    );
};

export default Contact;
