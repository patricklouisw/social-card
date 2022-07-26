import React from "react";

import styles from "./PhoneNumber.module.css";

const PhoneNumber = ({ number, type }) => {
  return (
    <div className={styles.phoneNumber}>
      <p>
        {type}: {number}
      </p>
    </div>
  );
};

export default PhoneNumber;
