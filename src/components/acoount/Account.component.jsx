import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cart_icon from "../../assets/svg/cart.svg";
import box_icon from "../../assets/svg/box.svg";
import user_icon from "../../assets/svg/user.svg";
import arrow_icon from "../../assets/svg/arrow.svg";
import styles from "./Account.module.scss";

const Account = () => {
  const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);

  return (
    <div
      className={styles.account}
      onClick={() => setIsOpenAccountMenu(!isOpenAccountMenu)}>
      <div className={styles.account_data}>
        <div className={styles.logo}>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFIgjoK1rkh6w/profile-displayphoto-shrink_800_800/0/1686734553335?e=2147483647&v=beta&t=T0y-o1tcmDImuepN3HDo_1NQ6b5ZsDznkrXsLJ71hoY"
            alt="User"
          />
        </div>

        <div className={styles.user}>
          <h3 className={styles.name}>Шерболот</h3>
          <p className={styles.email}>sherbolot@wedevx.co</p>
        </div>

        <div
          className={
            isOpenAccountMenu
              ? `${styles.arrow} ${styles.active}`
              : styles.arrow
          }>
          <img src={arrow_icon} alt=">" />
        </div>
      </div>

      <div
        className={
          isOpenAccountMenu
            ? `${styles.account_menu} ${styles.active}`
            : styles.account_menu
        }>
        <div className={styles.menu_list}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? `${styles.list_item} ${styles.active}`
                : styles.list_item
            }>
            <img src={user_icon} alt="Профиль" /> Профиль
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? `${styles.list_item} ${styles.active}`
                : styles.list_item
            }>
            <img src={cart_icon} alt="Корзина" /> Корзина <span>99+</span>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? `${styles.list_item} ${styles.active}`
                : styles.list_item
            }>
            <img src={box_icon} alt="Заказы" /> Заказы <span>6+</span>
          </NavLink>
        </div>

        <div className={`${styles.button} ${styles.logout}`}>Logout</div>
      </div>
    </div>
  );
};

export default Account;
