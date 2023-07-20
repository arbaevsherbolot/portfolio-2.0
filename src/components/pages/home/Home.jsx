import React, { useState } from "react";
import Modal from "../../modal/ModalForm";
import styles from "./Home.module.scss";

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className={styles.page_wrapper}>
        <button
          className={styles.button}
          onClick={() => setIsOpenModal(!isOpenModal)}>
          Свяжитесь с нами
        </button>
        <Modal open={isOpenModal} />
      </div>
    </>
  );
};

export default Home;
