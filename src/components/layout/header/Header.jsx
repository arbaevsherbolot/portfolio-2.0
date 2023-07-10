import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/" className={`${styles.link} ${styles.button}`}>
          <div className={styles.logo}>ChinatradeX</div>
        </Link>

        <div className={styles.middle}>
          <div className={styles.links}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active_link}` : styles.link
              }>
              О компании
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active_link}` : styles.link
              }>
              Товары
            </NavLink>

            <NavLink
              to="/deliver"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active_link}` : styles.link
              }>
              Доставка
            </NavLink>

            <div className={styles.order}>
              <p className={styles.text}>Заказать </p>

              <div className={styles.dropdown}>
                <div className={styles.menu}>
                  <div className={styles.list}>
                    <NavLink
                      to="/alibaba"
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.menu_link} ${styles.active}`
                          : styles.menu_link
                      }>
                      <h1 className={styles.title}>
                        Alibaba <span>НОВЫЙ</span>
                      </h1>
                      <p className={styles.desc}>
                        Транснациональный конгломерат электронной коммерции
                      </p>
                    </NavLink>

                    <NavLink
                      to="/1688"
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.menu_link} ${styles.active}`
                          : styles.menu_link
                      }>
                      <h1 className={styles.title}>1688</h1>
                      <p className={styles.desc}>
                        Оптовая торговая площадка Alibaba
                      </p>
                    </NavLink>

                    <NavLink
                      to="/taobao"
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.menu_link} ${styles.active}`
                          : styles.menu_link
                      }>
                      <h1 className={styles.title}>Taobao</h1>
                      <p className={styles.desc}>
                        Популярная китайская платформа электронной торговли
                        между потребителями платформа
                      </p>
                    </NavLink>

                    <NavLink
                      to="/poizon"
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.menu_link} ${styles.active}`
                          : styles.menu_link
                      }>
                      <h1 className={styles.title}>Poizon</h1>
                      <p className={styles.desc}>Платформы Alibaba и Poizon</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.buttons}>
            <Link to="/login" className={styles.button}>
              Войти
            </Link>

            <Link
              to="/register"
              className={`${styles.button} ${styles.active}`}>
              Регистрация
            </Link>
          </div>
        </div>

        <div className={styles.burger_menu}>
          <div className={styles.menu_icon}>
            <input
              className={
                isOpen
                  ? `${styles.button} ${styles.active}`
                  : `${styles.button}`
              }
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            className={
              isOpen ? `${styles.menu} ${styles.active}` : `${styles.menu}`
            }>
            <div className={styles.links}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active_link}`
                    : styles.link
                }>
                О компании
              </NavLink>

              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active_link}`
                    : styles.link
                }>
                Товары
              </NavLink>

              <NavLink
                to="/deliver"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active_link}`
                    : styles.link
                }>
                Доставка
              </NavLink>

              {/* <div className={styles.order}>
                <p className={styles.text}>Заказать </p>

                <div className={styles.dropdown}>
                  <div className={styles.menu}>
                    <div className={styles.list}>
                      <NavLink
                        to="/alibaba"
                        className={({ isActive }) =>
                          isActive
                            ? `${styles.menu_link} ${styles.active}`
                            : styles.menu_link
                        }>
                        <h1 className={styles.title}>
                          Alibaba <span>НОВЫЙ</span>
                        </h1>
                        <p className={styles.desc}>
                          Транснациональный конгломерат электронной коммерции
                        </p>
                      </NavLink>

                      <NavLink
                        to="/1688"
                        className={({ isActive }) =>
                          isActive
                            ? `${styles.menu_link} ${styles.active}`
                            : styles.menu_link
                        }>
                        <h1 className={styles.title}>1688</h1>
                        <p className={styles.desc}>
                          Оптовая торговая площадка Alibaba
                        </p>
                      </NavLink>

                      <NavLink
                        to="/taobao"
                        className={({ isActive }) =>
                          isActive
                            ? `${styles.menu_link} ${styles.active}`
                            : styles.menu_link
                        }>
                        <h1 className={styles.title}>Taobao</h1>
                        <p className={styles.desc}>
                          Популярная китайская платформа электронной торговли
                          между потребителями платформа
                        </p>
                      </NavLink>

                      <NavLink
                        to="/poizon"
                        className={({ isActive }) =>
                          isActive
                            ? `${styles.menu_link} ${styles.active}`
                            : styles.menu_link
                        }>
                        <h1 className={styles.title}>Poizon</h1>
                        <p className={styles.desc}>
                          Платформы Alibaba и Poizon
                        </p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className={styles.buttons}>
              <Link to="/login" className={styles.button}>
                Войти
              </Link>

              <Link
                to="/register"
                className={`${styles.button} ${styles.active}`}>
                Регистрация
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
