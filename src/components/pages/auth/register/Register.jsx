import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import google_svg from "../../../../assets/svg/google.svg";
import show_svg from "../../../../assets/svg/show.svg";
import hide_svg from "../../../../assets/svg/hide.svg";
import styles from "../Form.module.scss";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Регистрация";
  }, []);

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  const handleChangeFirstName = (e) => {
    setData((prev) => ({
      ...prev,
      firstName: e.target.value,
    }));
  };

  const handleChangeLastName = (e) => {
    setData((prev) => ({
      ...prev,
      lastName: e.target.value,
    }));
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
      if (
        (data.password && data.password.length < 6) ||
        data.password.length > 8
      ) {
        alert("Пароль должен состоять не менее чем из 6 символов");
      } else if (!validateEmail(data.email)) {
        alert("Недействительный адрес электронной почты");
      } else console.log(data);
    } catch (e) {
      alert(`${e.message}`);
    }
  }

  const validateEmail = (el) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(el);
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={sendData}
        onClick={(e) => e.stopPropagation()}>
        <div className={styles.inputs}>
          <div className={styles.cupple_inputs_container}>
            <div className={styles.input_wrapper}>
              <input
                required
                type="text"
                autoComplete="false"
                placeholder="Введите имя*"
                className={styles.input}
                onChange={handleChangeFirstName}
              />
            </div>

            <div className={styles.input_wrapper}>
              <input
                required
                type="text"
                autoComplete="false"
                placeholder="Введите фамилию*"
                className={styles.input}
                onChange={handleChangeLastName}
              />
            </div>
          </div>

          <div className={styles.input_wrapper}>
            <input
              required
              type="text"
              autoComplete="false"
              placeholder="Введите email*"
              className={styles.input}
              onChange={handleChangeEmail}
            />
          </div>

          <div className={styles.input_wrapper}>
            <input
              required
              type={!togglePassword ? "password" : "text"}
              autoComplete="false"
              placeholder="Введите 6-18-значный пароль*"
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
        </div>

        <button type="submit" className={styles.button}>
          Зарегистрироваться
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
