import React, { useState } from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import close_icon from "../../assets/svg/close.svg";
import styles from "./Auth.module.scss";

const Auth = ({ open }) => {
  const [isClose, setIsClose] = useState(true);
  const [toggleForm, setToggleForm] = useState(1);
  const close = isClose ? open : !open;

  const handleToggleForm = (i) => setToggleForm(i);

  return (
    <>
      <div
        className={
          close
            ? `${styles.page_wrapper} ${styles.active}`
            : styles.page_wrapper
        }
        onClick={() => setIsClose(!isClose)}>
        <div className={styles.head} onClick={(e) => e.stopPropagation()}>
          <div className={styles.top}>
            <h1 className={styles.title}>
              Войдите или создайте <br /> аккаунт
            </h1>

            <button
              className={styles.close_button}
              onClick={() => setIsClose(!isClose)}>
              <img src={close_icon} alt="close-x" />
            </button>
          </div>

          <div className={styles.toggle_items}>
            <button
              className={
                { 1: `${styles.toggle} ${styles.active}`, 2: styles.toggle }[
                  toggleForm
                ]
              }
              onClick={() => handleToggleForm(1)}>
              Войти
            </button>
            <button
              className={
                { 1: styles.toggle, 2: `${styles.toggle} ${styles.active}` }[
                  toggleForm
                ]
              }
              onClick={() => handleToggleForm(2)}>
              Создать аккаунт
            </button>
          </div>
        </div>

        {toggleForm === 1 ? <Login /> : <Register />}
      </div>
    </>
  );
};

export default Auth;
