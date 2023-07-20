import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cart_icon from "../../assets/svg/cart.svg";
import box_icon from "../../assets/svg/box.svg";
import user_icon from "../../assets/svg/user.svg";
import arrow_icon from "../../assets/svg/arrow.svg";
import styles from "./Account.module.scss";

const Account = ({ id, name, email, open }) => {
  const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);

  const listItems = [
    {
      title: "Профиль",
      path: "/profile",
      icon: user_icon,
    },
    {
      title: "Корзина",
      path: "/cart",
      icon: cart_icon,
      count: 99,
    },
    {
      title: "Заказы",
      path: "/orders",
      icon: box_icon,
      count: 1,
    },
  ];

  useEffect(() => {
    if (!open) {
      setIsOpenAccountMenu(false);
    }
  });

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
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.email}>{email}</p>
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
        onClick={(e) => e.stopPropagation()}
        className={
          isOpenAccountMenu
            ? `${styles.account_menu} ${styles.active}`
            : styles.account_menu
        }>
        <div className={styles.menu_list}>
          {listItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setIsOpenAccountMenu(!isOpenAccountMenu)}
              className={({ isActive }) =>
                isActive
                  ? `${styles.list_item} ${styles.active}`
                  : styles.list_item
              }>
              <img src={item.icon} alt={item.title} /> {item.title}{" "}
              {item.count ? <span>{item.count}</span> : null}
            </NavLink>
          ))}
        </div>

        <div className={`${styles.button} ${styles.logout}`}>Logout</div>
      </div>
    </div>
  );
};

export default Account;
