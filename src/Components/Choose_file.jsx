import React, { useRef, useState } from "react";
import styles from "../styles/Initiate_page_Styles/ChooseFile.module.css";
import cloudUpload from "../assets/svg/cloud.svg";
import uploadIcon from "../assets/svg/upload.svg";
import excelIcon from "../assets/svg/excel.svg";

const ChooseFile = () => {
  const fileInput = useRef();
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSize(file.size);
    }
  };

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => setIsUploading(false), 1500); // Simulate upload
  };

  return (
    <div className={styles.bulkUploadFrame}>
      <div className={styles.title}>Upload Bulk Users (.XLSX)</div>
      <div className={styles.uploadBox}>
        <div className={styles.chooseFileSection}>
          <label className={styles.chooseFileLabel}>
            <span className={styles.iconWrap}>
              <img src={cloudUpload} alt="cloud upload" className={styles.cloudIcon} />
            </span>
            <span className={styles.chooseFileText}>Choose File</span>
            <input
              type="file"
              accept=".xlsx,.xls"
              style={{ display: "none" }}
              ref={fileInput}
              onChange={handleFileChange}
            />
          </label>
          <span className={styles.fileInfo}>PDF format <span className={styles.dot}>•</span> Max. 4MB</span>
          {fileName && (
            <div className={styles.selectedFile}>
              <span>{fileName}</span>
              <span className={styles.size}>{(fileSize / (1024 * 1024)).toFixed(2)} MB</span>
            </div>
          )}
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.uploadBtn} onClick={handleUpload} disabled={!fileName || isUploading}>
            <img src={uploadIcon} alt="Upload" style={{ width: 18, height: 18, marginRight: 6 }} />
            Upload
          </button>
          <button className={styles.templateBtn}>
            <img src={excelIcon} alt="Excel Template" style={{ width: 18, height: 18, marginRight: 6 }} />
            Excel Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseFile;
