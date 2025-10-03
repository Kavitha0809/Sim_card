import React from "react";
import styles from "../styles/Initiate_page_Styles/Attachment.module.css";
import pdfIcon from "../assets/svg/pdf.svg";
import sheetIcon from "../assets/svg/sheet.svg";

const Attachment = ({style}) => {
  return (
    <div className={styles.attachmentFrame} style={style}>
      <div className={styles.title}>Attachment</div>
      <div className={styles.attachmentBox}>
        <div className={styles.pdfIconWrap}>
          <img src={pdfIcon} alt="PDF" className={styles.pdfIcon} />
        </div>
        <div className={styles.fileInfoSection}>
          <div className={styles.fileNameRow}>
            <span className={styles.fileName}>Bulk User.pdf</span>
          </div>
          <div className={styles.fileMetaRow}>
            <span className={styles.fileMeta}>11 Sep, 2023 | 12:24pm</span>
            <span className={styles.dot} />
            <span className={styles.fileSize}>4MB</span>
          </div>
        </div>
        <button className={styles.downloadBtn}>
          <img src={sheetIcon} alt="Sheet" className={styles.downloadIcon} />
        </button>
      </div>
    </div>
  );
};

export default Attachment;
