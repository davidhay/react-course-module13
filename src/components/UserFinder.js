import classes from "./UserFinder.module.css";

import { useState, useEffect } from "react";

import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const result = DUMMY_USERS.filter((user) => user.name.includes(searchTerm));
    console.log(searchTerm, result);
    setFilteredUsers(result);
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={classes.finder}>
      <input type="search" onChange={searchChangeHandler} />
      <Users users={filteredUsers} />
    </div>
  );
};

export default UserFinder;
