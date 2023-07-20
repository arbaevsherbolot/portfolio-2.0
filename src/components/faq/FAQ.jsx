import React, { useState } from "react";
import styles from "./FAQ.module.scss";

const FAQ = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={
          isOpen ? `${styles.faq_wrapper} ${styles.active}` : styles.faq_wrapper
        }
        onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.question_container}>
          <h2 className={styles.question}>{faq.question}</h2>
        </div>
        <div
          className={
            isOpen
              ? `${styles.desc_container} ${styles.active}`
              : styles.desc_container
          }>
          <p className={styles.desc}>{faq.desc}</p>
        </div>
      </div>
    </>
  );
};

export default FAQ;
