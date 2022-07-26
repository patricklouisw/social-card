import { useState, useEffect } from "react";
import SocialCard from "./components/SocialCard/SocialCard";

import styles from "./App.module.css";
import { getValue } from "@testing-library/user-event/dist/utils";

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");

        userData = (await response.json()).results;

        console.log(userData);
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);
      setAllUsers(userData);
    })();
  }, []);

  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(value)
    );
    setUsers(filteredUsers);
  };

  return (
    <div className={styles.app}>
      <h1>Social Cards</h1>
      <input
        className={styles.search_box}
        placeholder="Search..."
        onInput={filterCards}
      />
      <div className={styles.cards_container}>
        {users.map((user, index) => {
          return <SocialCard userData={user} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
