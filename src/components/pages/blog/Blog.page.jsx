import React from "react";
import styles from "./Blog.module.scss";

const Blog = ({ data }) => {
  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.content}>
          <div className={styles.main_post}>
            <div className={styles.main_post_content}>
              <span className={styles.date}>10 - August, 2023</span>

              <div className={styles.main_post_data}>
                <h2 className={styles.title}>My blog</h2>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  labore error minima unde dolores! Qui, doloremque omnis quis
                  consectetur dignissimos, magnam illum iusto, earum illo neque
                  facere. Nam, quidem ratione.
                </p>
              </div>
            </div>
          </div>

          {/* <div className={styles.posts_container}>
            <div className={styles.post}>
              <div className={styles.cover}>
                <img src="" alt="" />
              </div>

              <span className={styles.date}></span>

              <div className={styles.post_data}>
                <h2 className={styles.title}></h2>
                <p className={styles.description}></p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Blog;
