import React, { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import Uploader from "../../uploader/Uploader.component";
import EditInfo from "../../editInfo/EditInfo.component";
import UpdateBackground from "../../updateBackground/UpdateBackground.component";
import pencil_svg from "../../../assets/svg/pencil.svg";
import image_svg from "../../../assets/svg/image.svg";
import linkedin_icon from "../../../assets/svg/linkedin.svg";
import github_icon from "../../../assets/svg/github.svg";
import instagram_icon from "../../../assets/svg/instagram.svg";
import twitter_icon from "../../../assets/svg/twitter.svg";
import styles from "./Profile.module.scss";

const Profile = ({ data }) => {
  const auth = useAuthUser();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalChangeBG, setIsOpenModalChangeBG] = useState(false);

  useEffect(() => {
    if (!auth()) {
      return null;
    }

    document.title = "Profile";
  }, []);

  return (
    <>
      <div className={styles.page_wrapper}>
        <div
          className={styles.acount_wrapper}
          style={{
            background: `linear-gradient(#13131790, #131317ab),
      url("${
        data.background
          ? data.background
          : "https://c0.wallpaperflare.com/preview/498/476/962/kizilsu-tianshannan-mai-mountains-river.jpg"
      }")
        center/cover no-repeat`,
          }}>
          <div className={styles.left}>
            <div className={styles.account}>
              <div className={styles.photo}>
                <img
                  src={
                    data.photo
                      ? `http://127.0.0.1:2006/static/${data.photo}`
                      : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                  }
                  alt="User"
                />
              </div>

              <div className={styles.user_data}>
                <div className={styles.top}>
                  <h3 className={styles.name}>
                    {data.firstName} {data.lastName}
                  </h3>

                  <button
                    onClick={() => setIsOpenModal(!isOpenModal)}
                    className={styles.edit_button}>
                    <img src={pencil_svg} alt="Edit" />
                    Edit Profile
                  </button>
                </div>

                <p className={styles.email}>{data.email}</p>
              </div>
            </div>

            <div className={styles.buttons}>
              <Uploader />

              <button
                onClick={() => setIsOpenModalChangeBG(!isOpenModalChangeBG)}
                className={styles.edit_bg_button}>
                <img src={image_svg} alt="Image Background" />
                Change Background URL
              </button>
            </div>
          </div>

          <div className={styles.right}>
            {data.linkedin && (
              <a href={data.linkedin} target="_blank">
                <img
                  className={styles.social_icon}
                  src={linkedin_icon}
                  alt="Linkedin"
                />
              </a>
            )}

            {data.github && (
              <a href={data.github} target="_blank">
                <img
                  className={styles.social_icon}
                  src={github_icon}
                  alt="Github"
                />
              </a>
            )}

            {data.instagram && (
              <a href={data.instagram} target="_blank">
                <img
                  className={styles.social_icon}
                  src={instagram_icon}
                  alt="Instagram"
                />
              </a>
            )}

            {data.twitter && (
              <a href={data.twitter} target="_blank">
                <img
                  className={styles.social_icon}
                  src={twitter_icon}
                  alt="Twitter"
                />
              </a>
            )}
          </div>
        </div>

        <UpdateBackground open={isOpenModalChangeBG} url={data.background} />
        <EditInfo
          open={isOpenModal}
          firstName={data.firstName}
          lastName={data.lastName}
          linkedin={data.linkedin}
          github={data.github}
          instagram={data.instagram}
          twitter={data.twitter}
        />
      </div>
    </>
  );
};

export default Profile;
