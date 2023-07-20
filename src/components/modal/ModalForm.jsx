import React, { useState, useEffect } from "react";
import styles from "./ModalForm.module.scss";

const ModalForm = ({ open }) => {
  const [isClose, setIsClose] = useState(true);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const close = isClose ? open : !open;

  const sendDataForm = async (e) => {
    e.preventDefault();

    try {
      console.log(data);
      setSuccess(!success);
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const handleChangeFullName = (e) => {
    setData((prev) => ({
      ...prev,
      fullName: e.target.value,
    }));
  };

  const handleChangePhoneNumber = (e) => {
    setData((prev) => ({
      ...prev,
      phoneNumber: e.target.value,
    }));
  };

  const handleChangeEmail = (e) => {
    setData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  return (
    <>
      {success ? (
        <div
          className={
            close
              ? `${styles.modal_wrappper_success} ${styles.active}`
              : styles.modal_wrappper_success
          }
          onClick={() => setIsClose(!isClose)}>
          <div className={styles.box} onClick={(e) => e.stopPropagation()}>
            <img
              className={styles.img}
              src="https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif"
              alt="Success GIF"
            />

            <div className={styles.text}>
              <h2 className={styles.title}>Форма успешно отправлена!</h2>
              <p className={styles.desc}>
                Здравствуйте {data.fullName}! <br /> ответ будет предоставлен в
                течение дня.
              </p>
            </div>
          </div>
        </div>
      ) : (
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

            <form className={styles.form} onSubmit={sendDataForm}>
              <input
                type="text"
                onChange={handleChangeFullName}
                placeholder="Имя и Фамилия"
                className={styles.input}
              />

              <div className={styles.phone_input_wrapper}>
                <div className={styles.div}>🇰🇬</div>

                <input
                  type="text"
                  onChange={handleChangePhoneNumber}
                  placeholder="Номер телефона"
                  className={styles.input}
                />
              </div>

              <input
                type="text"
                onChange={handleChangeEmail}
                placeholder="Электронная почта"
                className={styles.input}
              />

              <button type="submit" className={styles.button}>
                Отправить
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
