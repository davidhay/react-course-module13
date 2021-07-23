import React, { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    console.log("User has been removed from screen", this.props.name);
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
