import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import photo_svg from "../../assets/svg/photo.svg";
import styles from "./Uploader.module.scss";

const Uploader = () => {
  const auth = useAuthUser();
  const [file, setFile] = useState(null);
  const [load, setLoad] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpdatePage = () => window.location.reload();

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

  useEffect(() => {
    if (file) {
      async function uploadFile() {
        if (!file) {
          return errorNotification("Please select a file first");
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
          if (auth()) {
            await axios.patch(
              `http://127.0.0.1:2006/api/auth/editPhoto/${auth().id}`,
              formData,
              {
                headers: {
                  "Content-Type": `multipart/form-data`,
                },
              }
            );
          }

          setLoad(!load);

          setInterval(() => {
            successNotification("Photo updated successfully");
          }, 2300);

          setInterval(() => {
            handleUpdatePage();
          }, 3000);
        } catch (e) {
          setErrorMessage(e.message);
          signOut();
        }
      }

      uploadFile();
    }
  }, [file]);

  return (
    <>
      <div>
        <form
          className={styles.edit}
          onClick={() => document.getElementById("file").click()}>
          <input
            className={styles.file}
            type="file"
            name="file"
            id="file"
            accept="image/*"
            hidden
            onChange={handleChangeFile}
          />

          <div className={styles.content}>
            {load ? (
              <img
                src="https://i.gifer.com/origin/44/446bcd468478f5bfb7b4e5c804571392_w200.webp"
                alt="Loading"
              />
            ) : (
              <>
                <img src={photo_svg} alt="Edit" />
                <span className={styles.title}>Edit photo</span>
              </>
            )}
          </div>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};

export default Uploader;
