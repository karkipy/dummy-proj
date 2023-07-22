import React from "react";

export function ProjectBar({ value, updateFunc }) {
    const renderCount = React.useRef(0);

    renderCount.current += 1;

    return (
        <div className="app-items">
            <h3>ProjectBar</h3>
            I am rendered : {renderCount.current} times 
            Got Value : {value}
            <button onClick={updateFunc}>
                Update ProjectBar
            </button>
        </div>
    )
}