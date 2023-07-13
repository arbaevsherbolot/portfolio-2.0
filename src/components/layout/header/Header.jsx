import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Account from "../../acoount/Account.component";
import Dropdown from "../../dropdown/Dropdown";
import styles from "./Header.module.scss";

const Header = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsOpen(false);
    }
  });

  const navLinks = [
    {
      path: "/about",
      title: "О компании",
    },
    {
      path: "/products",
      title: "Товары",
    },
    {
      path: "/deliver",
      title: "Доставка",
    },
  ];

  const dropdownMenuList = [
    {
      path: "/order/alibaba",
      title: "Alibaba",
      desc: "Транснациональный конгломерат электронной коммерции",
      tag: "НОВЫЙ",
    },
    {
      path: "/order/1688",
      title: "1688",
      desc: "Оптовая торговая площадка Alibaba",
    },
    {
      path: "/order/taobao",
      title: "Taobao",
      desc: "Популярная китайская платформа электронной торговли между потребителями платформа",
    },
    {
      path: "/order/poizon",
      title: "Poizon",
      desc: "Платформы Alibaba и Poizon",
    },
  ];

  const dropdowns = [
    {
      title: "Заказать",
      menuList: dropdownMenuList,
      tag: "",
    },
  ];

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
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active_link}`
                    : styles.link
                }>
                {link.title}
              </NavLink>
            ))}

            {dropdowns.map((dropdown, i) => (
              <Dropdown
                menuList={dropdown.menuList}
                title={dropdown.title}
                tag={dropdown.tag}
              />
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <Account
            id={1}
            name="Sherbolot"
            email="sherbolot@wedevx.co"
            open={open}
          />

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
            <Account
              id={1}
              name="Sherbolot"
              email="sherbolot@wedevx.co"
              open={open}
            />

            <div className={styles.links}>
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.link} ${styles.active_link}`
                      : styles.link
                  }>
                  {link.title}
                </NavLink>
              ))}

              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.button} ${styles.active_link}`
                    : `${styles.link} ${styles.button}`
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
