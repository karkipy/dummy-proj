import React from "react";

export function Card({ index, item, updateFunc }) {
    const renderCount = React.useRef(0);

    renderCount.current += 1;
    return (
        <div className="app-items card-item">
            <h4>{index} Card</h4>
            I am rendered : {renderCount.current} times 
            Got Value : {item?.value}

            
            <button onClick={updateFunc}>
                Update  {index} Card
            </button>
        </div>
    )
}