import React, { useState, useEffect } from "react";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { NavLink } from "react-router-dom";
import axios from "axios";
import like_icon from "../../assets/svg/like.svg";
import user_icon from "../../assets/svg/user.svg";
import arrow_icon from "../../assets/svg/arrow.svg";
import styles from "./Account.module.scss";

const Account = ({ open, data }) => {
  const [isClose, setIsClose] = useState(true);
  const close = isClose ? true : false;
  const auth = useAuthUser();
  const signOut = useSignOut();

  const handleSignOut = async () => {
    try {
      await axios.patch(`http://127.0.0.1:2006/api/auth/logout/${auth().id}`);

      signOut();
      window.location.reload();
    } catch (e) {
      alert("Error with logging out");
    }
  };

  const listItems = [
    {
      title: "Profile",
      path: "/profile",
      icon: user_icon,
    },
    {
      title: "Likes",
      path: "/likes",
      icon: like_icon,
      count: data.likes,
    },
  ];

  useEffect(() => {
    if (!open) {
      setIsClose(true);
    }
  });

  return data ? (
    <div className={styles.account} onClick={() => setIsClose(!isClose)}>
      <div className={styles.account_data}>
        <div className={styles.logo}>
          <img
            src={
              data.photo
                ? `http://127.0.0.1:2006/static/${data.photo}`
                : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            }
            alt="User"
          />
        </div>

        <div className={styles.user}>
          <h3 className={styles.name}>{data.firstName}</h3>
          <p className={styles.email}>{data.email}</p>
        </div>

        <div
          className={
            !close ? `${styles.arrow} ${styles.active}` : styles.arrow
          }>
          <img src={arrow_icon} alt=">" />
        </div>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={
          !close
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
              <img src={item.icon} alt={item.title} /> {item.title}
              {item.count ? <span>{item.count}</span> : null}
            </NavLink>
          ))}
        </div>

        <div
          className={`${styles.button} ${styles.logout}`}
          onClick={handleSignOut}>
          Logout
        </div>
      </div>
    </div>
  ) : null;
};

export default Account;
