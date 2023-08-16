import React, { useState, useEffect } from "react";
import sher from "../../../assets/sher.png";
import styles from "./Home.module.scss";

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.content}>
          <div className={styles.title}>PORTFOLIO</div>

          <img
            className={styles.man}
            src="https://www.freeiconspng.com/thumbs/mark-zuckerberg-png/businessman-mark-zuckerberg-png-20.png"
            alt="Mark Z"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
