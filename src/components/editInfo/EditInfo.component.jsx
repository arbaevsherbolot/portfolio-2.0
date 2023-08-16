import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import close_icon from "../../assets/svg/close.svg";
import linkedin_icon from "../../assets/svg/linkedin.svg";
import github_icon from "../../assets/svg/github.svg";
import instagram_icon from "../../assets/svg/instagram.svg";
import twitter_icon from "../../assets/svg/twitter.svg";
import styles from "./EditInfo.module.scss";

const EditInfo = ({
  open,
  firstName,
  lastName,
  linkedin,
  github,
  instagram,
  twitter,
}) => {
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
  } = useForm();

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

      setValue("firstName", firstName, {
        shouldValidate: true,
      });

      setValue("lastName", lastName, {
        shouldValidate: true,
      });

      setValue("linkedin", linkedin, {
        shouldValidate: true,
      });

      setValue("github", github, {
        shouldValidate: true,
      });

      setValue("instagram", instagram, {
        shouldValidate: true,
      });

      setValue("twitter", twitter, {
        shouldValidate: true,
      });
    }
  }, [open, firstName, lastName, setValue]);

  const sendData = async (data) => {
    try {
      if (auth()) {
        await axios
          .patch(`http://127.0.0.1:2006/api/auth/editMe/${auth().id}`, data)
          .then((response, err) => {
            if (err) {
              signOut();
              setErrorMessage(err.message);
            }

            if (response.data.error) {
              errorNotification(`${response.data.message}`);
            } else {
              successNotification("Profile information successfully updated");

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
              <h2 className={styles.title}>Edit your profile</h2>

              <button
                className={styles.close_button}
                onClick={() => setIsClose(!isClose)}>
                <img src={close_icon} alt="close-x" />
              </button>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(sendData)}>
            <div className={styles.inputs}>
              <div className={styles.input_wrapper}>
                <span className={styles.label}>First name</span>

                <input
                  type="text"
                  autoComplete="false"
                  placeholder="Sherbolot"
                  className={styles.input}
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "First name cannot exceed 50 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z0-9\s]+$/,
                      message: "First name cannot contain special characters",
                    },
                  })}
                />

                {errors.firstName && (
                  <span className={styles.error}>
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className={styles.input_wrapper}>
                <span className={styles.label}>Last name</span>

                <input
                  type="text"
                  autoComplete="false"
                  placeholder="Arbaev"
                  className={styles.input}
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Last name cannot exceed 50 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z0-9\s]+$/,
                      message: "Last name cannot contain special characters",
                    },
                  })}
                />

                {errors.lastName && (
                  <span className={styles.error}>
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.social_networks}>
              <span className={styles.title}>Social Networks</span>

              <div className={styles.input_wrapper}>
                <img src={linkedin_icon} alt="Linkedin" />

                <input
                  type="text"
                  autoComplete="false"
                  placeholder="Linkedin"
                  className={styles.input}
                  {...register("linkedin", {
                    pattern: {
                      value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                      message: "Invalid URL format",
                    },
                  })}
                />
              </div>

              {errors.linkedin && (
                <span className={styles.error}>{errors.linkedin.message}</span>
              )}

              <div className={styles.input_wrapper}>
                <img src={github_icon} alt="Github" />

                <input
                  type="text"
                  autoComplete="false"
                  placeholder="Github"
                  className={styles.input}
                  {...register("github", {
                    pattern: {
                      value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                      message: "Invalid URL format",
                    },
                  })}
                />
              </div>

              {errors.github && (
                <span className={styles.error}>{errors.github.message}</span>
              )}

              <div className={styles.input_wrapper}>
                <img src={instagram_icon} alt="Instagram" />

                <input
                  type="text"
                  autoComplete="false"
                  placeholder="Instagram"
                  className={styles.input}
                  {...register("instagram", {
                    pattern: {
                      value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                      message: "Invalid URL format",
                    },
                  })}
                />
              </div>

              {errors.instagram && (
                <span className={styles.error}>{errors.instagram.message}</span>
              )}

              <div className={styles.input_wrapper}>
                <img src={twitter_icon} alt="Twitter" />

                <input
                  type="text"
                  autoComplete="false"
                  placeholder="Twitter"
                  className={styles.input}
                  {...register("twitter", {
                    pattern: {
                      value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                      message: "Invalid URL format",
                    },
                  })}
                />
              </div>

              {errors.twitter && (
                <span className={styles.error}>{errors.twitter.message}</span>
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

export default EditInfo;
