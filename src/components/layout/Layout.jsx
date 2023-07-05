import React from "react";
import Header from "./header/Header";
import Router from "./router/Router";
import Footer from "./footer/Footer";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <div className={styles.layout_wrapper}>
        <header>
          <Header />
        </header>
        <main>
          <Router />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
