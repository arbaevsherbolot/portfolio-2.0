import React, { useState } from "react";
import styles from "./ModalForm.module.scss";

const ModalForm = ({ open }) => {
  const [isClose, setIsClose] = useState(true);
  const close = isClose ? open : !open;

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
          <div className={styles.text}>
            <h2 className={styles.title}>Связаться с нами</h2>
            <p className={styles.desc}>
              Наша команда всегда готова помочь вам. <br /> Пожалуйста,
              свяжитесь с нами
            </p>
          </div>

          <form className={styles.form}>
            <input
              type="text"
              placeholder="Имя и Фамилия"
              className={styles.input}
            />

            <input
              type="text"
              placeholder="Номер телефона"
              className={styles.input}
            />

            <input
              type="text"
              placeholder="Электронная почта"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
