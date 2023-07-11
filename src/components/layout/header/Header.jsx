import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import styles from "./Header.module.scss";

const Header = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  // useEffect(() => {
  //   if (!open) {
  //     setIsOpen(false);
  //   }
  // });

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
              <p className={styles.text}>Заказать</p>

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

          {/* <div className={styles.account}>
            <div className={styles.logo}>
              <img
                src="https://media.licdn.com/dms/image/D4D03AQFIgjoK1rkh6w/profile-displayphoto-shrink_800_800/0/1686734553335?e=2147483647&v=beta&t=T0y-o1tcmDImuepN3HDo_1NQ6b5ZsDznkrXsLJ71hoY"
                alt="User"
              />
            </div>
            <div className={styles.user}>
              <h3 className={styles.name}>Sherbolot</h3>
              <p className={styles.email}>sherbolot@wedevx.co</p>
            </div>
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

              <div className={styles.order}>
                <p
                  className={styles.text}
                  onClick={() => {
                    setIsOpenDropdown(!isOpenDropdown);
                    setIsOpen(true);
                  }}>
                  Заказать
                </p>

                <div
                  className={
                    isOpenDropdown
                      ? `${styles.dropdown} ${styles.active}`
                      : styles.dropdown
                  }>
                  <div className={styles.dropdown_menu}>
                    <div className={styles.list}>
                      <NavLink
                        to="/alibaba"
                        className={({ isActive }) =>
                          isActive
                            ? `${styles.menu_link} ${styles.active}`
                            : styles.menu_link
                        }
                        onClick={() => {
                          setIsOpenDropdown(!isOpenDropdown);
                          setIsOpen(false);
                        }}>
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
                        }
                        onClick={() => {
                          setIsOpenDropdown(!isOpenDropdown);
                          setIsOpen(false);
                        }}>
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
                        }
                        onClick={() => {
                          setIsOpenDropdown(!isOpenDropdown);
                          setIsOpen(false);
                        }}>
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
                        }
                        onClick={() => {
                          setIsOpenDropdown(!isOpenDropdown);
                          setIsOpen(false);
                        }}>
                        <h1 className={styles.title}>Poizon</h1>
                        <p className={styles.desc}>
                          Платформы Alibaba и Poizon
                        </p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
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

              {/* <div className={styles.account}>
                <div className={styles.logo}>
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQFIgjoK1rkh6w/profile-displayphoto-shrink_800_800/0/1686734553335?e=2147483647&v=beta&t=T0y-o1tcmDImuepN3HDo_1NQ6b5ZsDznkrXsLJ71hoY"
                    alt="User"
                  />
                </div>
                <div className={styles.user}>
                  <h3 className={styles.name}>Sherbolot</h3>
                  <p className={styles.email}>sherbolot@wedevx.co</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
