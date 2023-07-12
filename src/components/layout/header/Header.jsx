import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import arrow_icon from "../../../assets/svg/arrow.svg";
import styles from "./Header.module.scss";
import Account from "../../acoount/Account.component";

const Header = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsOpen(false);
    }
  });

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
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
              <div className={styles.text}>
                Заказать
                <div className={styles.arrow}>
                  <img src={arrow_icon} alt=">" />
                </div>
              </div>

              <div className={styles.dropdown}>
                <div className={styles.menu}>
                  <div className={styles.list}>
                    <NavLink
                      to="/order/alibaba"
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
                      to="/order/1688"
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
                      to="/order/taobao"
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
                      to="/order/poizon"
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
          <Account />

          {/* <div className={styles.buttons}>
            <Link to="/login" className={styles.button}>
              Войти
            </Link>

            <Link
              to="/register"
              className={`${styles.button} ${styles.active}`}>
              Регистрация
            </Link>
          </div> */}
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
            onClick={(e) => e.stopPropagation()}
            className={
              isOpen ? `${styles.menu} ${styles.active}` : `${styles.menu}`
            }>
            <Account />

            <div className={styles.links}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active_link}`
                    : styles.link
                }
                onClick={() => setIsOpen(!isOpen)}>
                О компании
              </NavLink>

              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active_link}`
                    : styles.link
                }
                onClick={() => setIsOpen(!isOpen)}>
                Товары
              </NavLink>

              <NavLink
                to="/deliver"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active_link}`
                    : styles.link
                }
                onClick={() => setIsOpen(!isOpen)}>
                Доставка
              </NavLink>

              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active_link}`
                    : styles.link
                }
                onClick={() => setIsOpen(!isOpen)}>
                Заказать
              </NavLink>
            </div>

            {/* <div className={styles.buttons}>
              <Link
                to="/login"
                className={styles.button}
                onClick={() => setIsOpen(!isOpen)}>
                Войти
              </Link>

              <Link
                to="/register"
                className={`${styles.button} ${styles.active}`}
                onClick={() => setIsOpen(!isOpen)}>
                Регистрация
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
