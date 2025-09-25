import React from 'react';
import calendarIcon from '../assets/svg/calender.svg';

const styles = {
  inputFrame: {
    width: '415px',
    height: '48px',
    backgroundColor: '#ffffff',
    border: '1px solid #d0d5dd',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  leftContent: {
    flex: 1,
    height: '20px',
    padding: '14px 48px 14px 16px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    border: 'none',
    outline: 'none',
    width: '100%',
    height: '20px',
    fontSize: '14px',
    fontFamily: 'Samsung InterFace',
    color: '#101928',
    lineHeight: '145%',
    padding: 0,
    backgroundColor: 'transparent',
  },
  placeholder: {
    position: 'absolute',
    left: '16px',
    fontSize: '14px',
    fontFamily: 'Samsung InterFace',
    color: '#101928',
    lineHeight: '145%',
    pointerEvents: 'none',
  },
  rightContent: {
    width: '20px',
    height: '20px',
    padding: '14px 16px',
    position: 'absolute',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRight: {
    width: '20px',
    height: '20px',
  }
};

const FromDateInput = ({ value, onChange, readOnly = true }) => {
  return (
    <div style={styles.inputFrame}>
      <div style={styles.leftContent}>
        <input 
          type="text"
          style={styles.input}
          value={value || ''}
          onChange={onChange}
          readOnly={readOnly}
          placeholder=""
        />
        {!value && (
          <div style={styles.placeholder}>
            14/09/2025 | (Work Duration 11:10 hrs)
          </div>
        )}
      </div>
      <div style={styles.rightContent}>
        <img 
          src={calendarIcon} 
          alt="Calendar" 
          style={styles.iconRight}
        />
      </div>
    </div>
  );
};

export default FromDateInput;