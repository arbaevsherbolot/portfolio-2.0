import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import google_svg from "../../../../assets/svg/google.svg";
import show_svg from "../../../../assets/svg/show.svg";
import hide_svg from "../../../../assets/svg/hide.svg";
import styles from "../Form.module.scss";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Вход";
  }, []);

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  const handleChangeEmail = (e) => {
    setData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleChangePassword = (e) => {
    setData((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  async function sendData(e) {
    e.preventDefault();

    try {
      console.log(data);
    } catch (e) {
      alert(`${e.message}`);
    }
  }

  return (
    <>
      <form
        className={styles.form}
        onSubmit={sendData}
        onClick={(e) => e.stopPropagation()}>
        <div className={styles.inputs}>
          <div className={styles.input_wrapper}>
            <input
              required
              type="text"
              autoComplete="false"
              placeholder="Введите email"
              className={styles.input}
              onChange={handleChangeEmail}
            />
          </div>

          <div className={styles.input_wrapper}>
            <input
              required
              type={!togglePassword ? "password" : "text"}
              autoComplete="false"
              placeholder="Введите пароль"
              className={
                !togglePassword
                  ? `${styles.input} ${styles.password}`
                  : styles.input
              }
              onChange={handleChangePassword}
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

        <button type="submit" className={styles.button}>
          Войти
        </button>

        <div className={styles.devider}>
          <hr />
          <span>или</span>
          <hr />
        </div>

        <div className={`${styles.button} ${styles.google} `}>
          <img src={google_svg} alt="Google" />
          <span className={styles.text}>Продолжить с Google</span>
        </div>
      </form>
    </>
  );
};

export default Login;
