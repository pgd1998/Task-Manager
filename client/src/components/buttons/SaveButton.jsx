import React from 'react';

const SaveButton = ({ disabled=false, type="button" }) => {
    return (
        <button className='save-button' type={type} disabled={disabled}>Save</button>
    );
}

export default SaveButton;