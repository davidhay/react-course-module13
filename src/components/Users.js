import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    //state in class based is ALWAYS an object!!!
    this.state = { showUsers: true }; //it can be more complex
  }

  componentDidUpdate() {
    // try {
    //   someCodeWhichMightFail()
    // } catch (err) {
    //   // handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    //new state merged with old state
    this.setState((prevState) => {
      return {
        showUsers: !prevState.showUsers,
      };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
