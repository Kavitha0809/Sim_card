import React, { useRef, useState } from 'react';
import styles from '../styles/Initiate_page_Styles/ChooseFile.module.css';
import cloudIcon from '../assets/svg/clockicon.svg'; // Use your cloud upload icon here

const Frame1272628517 = () => {
  const fileInput = useRef();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Implement upload logic here
    alert('Upload logic goes here');
  };

  const handleTemplate = () => {
    // Implement template download logic here
    alert('Download Excel template logic goes here');
  };

  return (
    <div className={styles.bulkUploadFrame}>
      <div className={styles.title}>Upload Bulk Users (.XLSX)</div>
      <div className={styles.uploadBox}>
        <div className={styles.chooseFileSection}>
          <label className={styles.chooseFileLabel}>
            <span className={styles.iconWrap}>
              <img src={cloudIcon} alt="cloud upload" className={styles.cloudIcon} />
            </span>
            <span className={styles.chooseFileText}>Choose File</span>
            <input
              type="file"
              accept=".xlsx"
              style={{ display: 'none' }}
              ref={fileInput}
              onChange={handleFileChange}
            />
          </label>
          <div className={styles.fileInfo}>
            PDF Format <span className={styles.dot}>•</span> Max. 4MB
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button
            className={styles.uploadBtn}
            onClick={handleUpload}
            disabled={!file}
          >
            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12V4M8 4l-3 3m3-3l3 3" stroke="#38aee0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="12" width="10" height="2" rx="1" fill="#38aee0"/>
            </svg>
            Upload
          </button>
          <button className={styles.templateBtn} onClick={handleTemplate}>
            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h8v8H4V4z" stroke="#38aee0" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M8 7v2" stroke="#38aee0" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Excel Template
          </button>
        </div>
      </div>
      {file && (
        <div className={styles.selectedFile}>
          <span>{file.name}</span>
          <span className={styles.size}>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
        </div>
      )}
    </div>
  );
};

export default Frame1272628517;
