import React from "react";

export function RoomBoard({ updateFunc, value }) {
    const renderCount = React.useRef(0);

    renderCount.current += 1;
    return (
        <div className="app-items">
            <h3>RoomBoard</h3>
            I am rendered : {renderCount.current} times 
            Got RoomBoard Value : {value}
            <button onClick={updateFunc}>
                Update RoomBoard
            </button>
        </div>
    )
}