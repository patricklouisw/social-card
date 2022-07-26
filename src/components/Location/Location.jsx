import React from "react";

import styles from "./Location.module.css";

const Location = ({ location }) => {
  return (
    <div className={styles.location}>
      <p>
        {location.street.number}, {location.street.name}
      </p>
      <p>{location.city}</p>
      <p>{location.state}</p>
      <p>{location.postcode}</p>
      <p>{location.country}</p>
    </div>
  );
};

export default Location;
