import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignIn } from "react-auth-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import google_svg from "../../../../assets/svg/google.svg";
import show_svg from "../../../../assets/svg/show.svg";
import hide_svg from "../../../../assets/svg/hide.svg";
import logo from "../../../../assets/blog-logo.png";
import close_icon from "../../../../assets/svg/left-arrow.svg";
import error_icon from "../../../../assets/svg/error.svg";
import styles from "../Form.module.scss";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showInput, setShowInput] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    document.title = "Log In";

    setValue("email", localStorage.getItem("email"));
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
    localStorage.setItem("email", data.email);

    try {
      await axios
        .post("http://127.0.0.1:2006/api/auth/login", data)
        .then((response, err) => {
          if (err) {
            setErrorMessage(err.message);
          }

          if (response.data.error) {
            errorNotification(`${response.data.message}`);
          } else {
            const data = response.data;
            const { id } = data;

            signIn({
              expiresIn: 3600,
              tokenType: "Bearer",
              authState: {
                id,
              },
            });

            window.location.reload();
            navigate("/blog");
          }
        });
    } catch (e) {
      alert(`${e.message}`);
    }
  };

  const googleAuth = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:2006/api/auth/google/callback"
      );

      console.log(response);
    } catch (e) {
      console.log(e.message);
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

          {/* <h3 className={styles.title}>Welcome Back!</h3> */}

          <div className={styles.inputs}>
            <div className={styles.input_wrapper}>
              <span className={styles.label}>Email</span>

              <input
                type="text"
                autoComplete="false"
                style={errors.email && { borderColor: "#ff2f2f91" }}
                placeholder="sherbolot@wedevx.co"
                className={styles.input}
                onFocus={() => setShowInput(true)}
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

            <div
              className={styles.input_wrapper}
              style={!showInput ? { display: "none" } : { display: "flex" }}>
              <span className={styles.label}>Password</span>

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

                <span className={styles.show_or_hide}>
                  {!togglePassword ? "SHOW" : "HIDE"}
                </span>
              </div>

              {errors.password && (
                <span className={styles.error}>
                  <img src={error_icon} alt="error" />
                  {errors.password.message}
                </span>
              )}
            </div>

            <Link
              style={!showInput ? { display: "none" } : { display: "block" }}
              to="/password-forgot"
              className={`${styles.link} ${styles.forgot}`}>
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            onClick={() => setShowInput(true)}
            className={styles.button}>
            Log In
          </button>

          <Link to="/register" className={styles.link}>
            Don't have an account? <span>Sign up</span>
          </Link>

          <div className={styles.devider}>
            <hr />
            <span>or</span>
            <hr />
          </div>

          <div
            onClick={() => googleAuth()}
            className={`${styles.button} ${styles.google} `}>
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
