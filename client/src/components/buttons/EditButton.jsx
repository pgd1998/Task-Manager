import React from "react";

const EditButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="edit-button">
            Edit
        </button>
    );
 };

export default EditButton;