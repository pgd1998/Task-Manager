import React from 'react';

const SaveButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className='save-button'>Save</button>
    );
}

export default SaveButton;