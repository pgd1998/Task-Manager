import React from "react";

const CancelButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="cancel-button">
            Cancel
        </button>
    );
}

export default CancelButton;