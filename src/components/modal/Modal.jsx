import React, { useEffect, useState } from "react";
import close_icon from "../../assets/svg/close.svg";
import resume from "../../assets/resume.png";
import styles from "./Modal.module.scss";

const Modal = ({ open }) => {
  const [isClose, setIsClose] = useState(true);
  const close = isClose ? open : !open;

  useEffect(() => {
    if (open) {
      setIsClose(true);
    }
  }, [open]);

  return (
    <>
      <div
        className={
          close
            ? `${styles.modal_wrappper} ${styles.active}`
            : styles.modal_wrappper
        }
        onClick={() => setIsClose(!isClose)}>
        <div className={styles.box} onClick={(e) => e.stopPropagation()}>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2 className={styles.title}>Sherbolot Arbaev - CV</h2>

              <button
                className={styles.close_button}
                onClick={() => setIsClose(!isClose)}>
                <img src={close_icon} alt="close-x" />
              </button>
            </div>

            <div className={styles.resume}>
              <img src={resume} alt="Sherbolot Arbaev CV" />
            </div>
          </div>

          <div className={styles.buttons}>
            {/* <div
              className={`${styles.button} ${styles.close_button}`}
              onClick={() => setIsClose(!isClose)}>
              Close
            </div> */}

            <a
              className={`${styles.button} ${styles.upgrade_button}`}
              href="https://sherbolotarbaev.pro/assets/Sherbolot%20Arbaev%20-%20Resume-73861e7e.pdf"
              target="_blank">
              Download
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
