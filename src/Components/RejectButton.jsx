import React from 'react';

const RejectButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: '90px',
        height: '38px',
        padding: '0',
        backgroundColor: '#ffffff',
        border: '1px solid #38aee0',
        borderRadius: '4px',
        color: '#38aee0',
        font: 'Samsung InterFace',
        fontSize: '14px',
        lineHeight: '100%',
        cursor: 'pointer',
        marginLeft: '10px', // Add spacing between buttons
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Reject
    </button>
  );
};

export default RejectButton;