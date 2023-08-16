import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import google_svg from "../../../../assets/svg/google.svg";
import hide_svg from "../../../../assets/svg/hide.svg";
import show_svg from "../../../../assets/svg/show.svg";
import logo from "../../../../assets/blog-logo.png";
import close_icon from "../../../../assets/svg/left-arrow.svg";
import error_icon from "../../../../assets/svg/error.svg";
import styles from "../Form.module.scss";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

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

  const sendData = async (data) => {
    try {
      await axios
        .post("http://127.0.0.1:2006/api/auth/register", data)
        .then((response, err) => {
          if (err) {
            setErrorMessage(err.message);
          }

          if (response.data.error) {
            errorNotification(`${response.data.message}`);
          } else {
            navigate("/login");
          }
        });
    } catch (e) {
      alert(`${e.message}`);
    }
  };

  return (
    <>
      <div className={styles.page_wrapper}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(sendData)}
          onClick={(e) => e.stopPropagation()}>
          <div className={styles.top}>
            <Link to="/" className={styles.close_button}>
              <img src={close_icon} alt="close-x" />
            </Link>

            <div className={styles.logo}>
              <img src={logo} alt="Logo" />
            </div>
          </div>

          {/* <h3 className={styles.title}>Welcome! 👋🏻</h3> */}

          <div className={styles.inputs}>
            <div className={styles.cupple_inputs_container}>
              <div className={styles.input_wrapper}>
                <span className={styles.label}>First name*</span>

                <input
                  type="text"
                  autoComplete="false"
                  style={errors.firstName && { borderColor: "#ff2f2f91" }}
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
                  })}
                />

                {errors.firstName && (
                  <span className={styles.error}>
                    <img src={error_icon} alt="error" />
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className={styles.input_wrapper}>
                <span className={styles.label}>Last name*</span>

                <input
                  type="text"
                  autoComplete="false"
                  style={errors.lastName && { borderColor: "#ff2f2f91" }}
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
                  })}
                />

                {errors.lastName && (
                  <span className={styles.error}>
                    <img src={error_icon} alt="error" />
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.input_wrapper}>
              <span className={styles.label}>
                Email address (personal or work)*
              </span>

              <input
                type="text"
                autoComplete="false"
                style={errors.email && { borderColor: "#ff2f2f91" }}
                placeholder="sherbolot@wedevx.co"
                className={styles.input}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              {errors.email && (
                <span className={styles.error}>
                  <img src={error_icon} alt="error" />
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className={styles.input_wrapper}>
              <span className={styles.label}>Create a password*</span>

              <div className={styles.password_wrapper}>
                <input
                  type={!togglePassword ? "password" : "text"}
                  autoComplete="false"
                  style={errors.password && { borderColor: "#ff2f2f91" }}
                  placeholder="123456"
                  className={
                    !togglePassword
                      ? `${styles.input} ${styles.password}`
                      : styles.input
                  }
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 24,
                      message: "Password cannot exceed 24 characters",
                    },
                  })}
                />

                <img
                  src={!togglePassword ? show_svg : hide_svg}
                  alt="Show Password"
                  className={styles.toggle_password}
                  onClick={handleTogglePassword}
                />
              </div>

              {errors.password && (
                <span className={styles.error}>
                  <img src={error_icon} alt="error" />
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          <button type="submit" className={styles.button}>
            Sign Up
          </button>

          <Link to="/login" className={styles.link}>
            Already have an account? <span>Log in</span>
          </Link>

          <div className={styles.devider}>
            <hr />
            <span>or</span>
            <hr />
          </div>

          <div className={`${styles.button} ${styles.google} `}>
            <img src={google_svg} alt="Google" />
            <span className={styles.text}>Continue with Google</span>
          </div>

          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Login;
