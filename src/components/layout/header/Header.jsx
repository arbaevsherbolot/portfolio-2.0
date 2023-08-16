import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import Account from "../../account/Account.component";
import Dropdown from "../../dropdown/Dropdown.component";
import Modal from "../../modal/Modal";
import logo from "../../../assets/logo.png";
import logo_blog from "../../../assets/blog-logo.png";
import styles from "./Header.module.scss";

const Header = ({ open, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalResume, setIsOpenModalResume] = useState(false);
  const auth = useAuthUser();

  useEffect(() => {
    if (!open) {
      setIsOpen(false);
      setIsOpenModal(false);
    }
  });

  const navLinks = [
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/projects",
      title: "Projects",
    },
    {
      path: "/skills",
      title: "Skills",
    },
  ];

  const dropdownMenuList = [
    {
      id: 1,
      path: "/order/alibaba",
      title: "Quick View",
      tag: "",
    },
    {
      id: 2,
      path: "/order/taobao",
      title: "Download",
      tag: "PDF",
    },
  ];

  const dropdowns = [
    {
      title: "Resume",
      menuList: dropdownMenuList,
      tag: "",
    },
  ];

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={auth() ? logo_blog : logo} alt="Logo" />
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

            {/* {dropdowns.map((dropdown, i) => (
            <Dropdown
              key={i}
              menuList={dropdown.menuList}
              title={dropdown.title}
              tag={dropdown.tag}
            />
          ))} */}

            <NavLink
              to="/blog"
              onClick={() => setIsOpenModal(!isOpenModal)}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active_link}` : styles.link
              }>
              Blog
            </NavLink>
          </div>
        </div>

        <div className={styles.right}>
          {auth() ? <Account data={data} open={open} /> : null}

          <div className={styles.buttons}>
            <div
              className={styles.button}
              onClick={() => setIsOpenModalResume(!isOpenModalResume)}>
              Resume
            </div>
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
            onClick={(e) => e.stopPropagation()}
            className={
              isOpen ? `${styles.menu} ${styles.active}` : `${styles.menu}`
            }>
            {auth() ? <Account data={data} open={open} /> : null}
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
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active_link}`
                    : styles.link
                }>
                Blog
              </NavLink>
            </div>

            <div className={styles.buttons}>
              <div
                className={styles.button}
                onClick={() => setIsOpenModalResume(!isOpenModalResume)}>
                Resume
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal open={isOpenModalResume} />
    </>
  );
};

export default Header;
