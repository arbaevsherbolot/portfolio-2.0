import React, { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Router from "./router/Router";
import styles from "./Layout.module.scss";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className={styles.layout_wrapper}>
        <header>
          <Header open={isOpen} />
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
