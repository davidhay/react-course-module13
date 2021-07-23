import classes from "./UserFinder.module.css";

import { Component, Fragment } from "react";

import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  // Simulating data coming later
  // this only runs once
  componentDidMount() {
     //send http request....
    this.setState({ filteredUsers: DUMMY_USERS });      
  }

  //will be called when state changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      const result = DUMMY_USERS.filter((user) =>
        user.name.includes(this.state.searchTerm)
      );
      console.log(this.state.searchTerm, result);
      //remember : what's passed to setState is merged
      this.setState({ filteredUsers: result });
    }
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
          <Users users={this.state.filteredUsers} />
        </div>
      </Fragment>
    );
  }

  searchChangeHandler = (event) => {
    //remember : what's passed into setState is merged!
    this.setState({ searchTerm: event.target.value });
  };
}

export default UserFinder;
