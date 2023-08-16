import React, { useState, useEffect } from "react";
import { useAuthUser, useSignOut } from "react-auth-kit";
import axios from "axios";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Router from "./router/Router";
import styles from "./Layout.module.scss";

const Layout = () => {
  const auth = useAuthUser();
  const signOut = useSignOut();
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    linkedin: "",
    github: "",
    instagram: "",
    twitter: "",
    photo: "",
    email: "",
    background: "",
    likes: 0,
  });

  const getUserInfo = async () => {
    try {
      if (auth()) {
        await axios
          .get(`http://127.0.0.1:2006/api/auth/me/${auth().id}`)
          .then((response, err) => {
            if (err) {
              signOut();
            }

            if (response.data.error) {
              signOut();
            } else {
              const data = response.data;
              const {
                email,
                firstName,
                lastName,
                linkedin,
                github,
                instagram,
                twitter,
                photo,
                background,
                likes,
              } = data;

              setData((prev) => ({
                ...prev,
                firstName,
                lastName,
                linkedin,
                github,
                instagram,
                twitter,
                photo,
                email,
                background,
                likes,
              }));
            }
          });
      }
    } catch (e) {
      alert(`${e.message}`);
      signOut();
    }
  };

  useEffect(() => {
    if (!auth()) {
      signOut();
    }

    getUserInfo();
  }, []);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className={styles.layout_wrapper}>
        <header>
          <Header open={isOpen} data={data} />
        </header>
        <main>
          <Router data={data} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
