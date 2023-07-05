import React, { useState } from "react";
import { Link } from "react-router-dom";
import google_svg from "../../../assets/svg/google.svg";
import show_svg from "../../../assets/svg/show.svg";
import hide_svg from "../../../assets/svg/hide.svg";
import styles from "./Login.module.scss";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  return (
    <>
      <div className={styles.page_wrapper}>
        <form className={styles.form}>
          <h2 className={styles.title}>Войти</h2>

          <div className={styles.inputs}>
            <div className={styles.input_wrapper}>
              <input
                type="text"
                autoComplete={false}
                placeholder="Введите email"
                className={styles.input}
              />
            </div>

            <div className={styles.input_wrapper}>
              <input
                type={!togglePassword ? "password" : "text"}
                autoComplete={false}
                placeholder="Введите 6-18-значный пароль"
                className={
                  !togglePassword
                    ? `${styles.input} ${styles.password}`
                    : styles.input
                }
              />

              <img
                src={!togglePassword ? show_svg : hide_svg}
                alt="Show Password"
                className={styles.toggle_password}
                onClick={handleTogglePassword}
              />
            </div>

            <Link
              to="/password-forgot"
              className={`${styles.link} ${styles.forgot}`}>
              <span>Забыли пароль?</span>
            </Link>
          </div>

          <button className={styles.button}>Войти</button>

          <div className={styles.devider}>
            <hr />
            <span>или</span>
            <hr />
          </div>

          <div className={`${styles.button} ${styles.google} `}>
            <img src={google_svg} alt="Google" />
            <span className={styles.text}>Вход через аккаунт Google</span>
          </div>

          <Link to="/register" className={styles.link}>
            Нет аккаунта? <span>Регистрация</span>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
