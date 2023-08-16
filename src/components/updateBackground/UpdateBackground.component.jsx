import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import close_icon from "../../assets/svg/close.svg";
import styles from "./UpdateBackground.module.scss";

const UpdateBackground = ({ open, url }) => {
  const [isClose, setIsClose] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const auth = useAuthUser();
  const signOut = useSignOut();
  const close = isClose ? open : !open;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const watchUrl = watch("url", url);

  const errorNotification = (msg) => {
    return toast.error(errorMessage ? errorMessage : msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const successNotification = (msg) => {
    return toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleUpdatePage = () => window.location.reload();

  useEffect(() => {
    if (open) {
      setIsClose(true);

      setValue("url", url);
    }
  }, [open, url, setValue]);

  const sendData = async (data) => {
    try {
      if (auth()) {
        await axios
          .patch(
            `http://127.0.0.1:2006/api/auth/changeBackground/${auth().id}`,
            data
          )
          .then((response, err) => {
            if (err) {
              signOut();
              setErrorMessage(err.message);
            }

            if (response.data.error) {
              errorNotification(`${response.data.message}`);
            } else {
              successNotification("Background successfully updated");

              setInterval(() => {
                handleUpdatePage();
              }, 1500);
            }
          });
      }
    } catch (e) {
      setErrorMessage(`${e.message}`);
      signOut();
    }
  };

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
              <h2 className={styles.title}>Change your background</h2>

              <button
                className={styles.close_button}
                onClick={() => setIsClose(!isClose)}>
                <img src={close_icon} alt="close-x" />
              </button>
            </div>
          </div>

          {watchUrl && (
            <div className={styles.background_preview}>
              <img src={watchUrl} alt="" />
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit(sendData)}>
            <div className={styles.input_wrapper}>
              <input
                type="text"
                autoComplete="false"
                placeholder="URL"
                className={styles.input}
                {...register("url", {
                  required: "URL is required",
                  pattern: {
                    value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                    message: "Invalid URL format",
                  },
                })}
              />

              {errors.url && (
                <span className={styles.error}>{errors.url.message}</span>
              )}
            </div>

            <div className={styles.buttons}>
              <div
                className={`${styles.button} ${styles.close}`}
                onClick={() => setIsClose(!isClose)}>
                Close
              </div>

              <button
                type="submit"
                className={`${styles.button} ${styles.update}`}>
                Update
              </button>
            </div>
          </form>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default UpdateBackground;
