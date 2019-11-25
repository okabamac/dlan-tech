import * as React from "react";
interface Props {
    color: string;
}
const Hamburger: React.FC<Props> = ({ color }) => {
    return (
        <div id="hamburger-icon" className={color}>
            <div className="btn-line line-1"></div>
            <div className="btn-line line-2"></div>
            <div className="btn-line line-3"></div>
        </div>
    );
};

export default Hamburger;
