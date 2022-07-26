import React from "react";

import Location from "../Location/Location";
import PhoneNumber from "../PhoneNumber/PhoneNumber";

import styles from "./SocialCard.module.css";

const SocialCard = ({ userData }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        {userData.name.first}, {userData.name.last}
      </div>
      <div className={styles.card__body}>
        <Location location={userData.location} />
        <PhoneNumber type="Home" number={userData.phone} />
        <PhoneNumber type="Mobile" number={userData.cell} />
        <div className={styles.card__image}>
          <img src={userData.picture.medium} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
