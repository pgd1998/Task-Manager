import React from "react";

const CancelButton = ({ onClick, type="button" }) => {
    return (
        <button onClick={onClick} type={ type} className="cancel-button">
            Cancel
        </button>
    );
console.log("in cancel button");
}

export default CancelButton;