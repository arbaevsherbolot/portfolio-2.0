import React from "react";
import { NavLink } from "react-router-dom";
import arrow_icon from "../../assets/svg/arrow.svg";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ menuList, title, tag }) => {
  return (
    <>
      <div className={styles.dropdown_wrapper}>
        <div className={styles.dropdown_title}>
          {title} {tag ? <span>{tag}</span> : null}
          <div className={styles.arrow}>
            <img src={arrow_icon} alt=">" />
          </div>
        </div>

        <div className={styles.dropdown}>
          <div className={styles.menu}>
            <div className={styles.list}>
              {menuList.map((listItem, i) => (
                <NavLink
                  key={i}
                  to={listItem.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.menu_link} ${styles.active}`
                      : styles.menu_link
                  }>
                  <h1 className={styles.title}>
                    {listItem.title}
                    {listItem.tag ? <span>{listItem.tag}</span> : null}
                  </h1>
                  <p className={styles.desc}>{listItem.desc}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
