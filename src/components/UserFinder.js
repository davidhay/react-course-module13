import classes from "./UserFinder.module.css";

import { Component, Fragment } from "react";

import Users from "./Users";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  static contextType = UsersContext;

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
    this.setState({ filteredUsers: this.context.users });
  }

  //will be called when state changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      const result = this.context.users.filter((user) =>
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
          <ErrorBoundary>
            <Users users={[]} />
          </ErrorBoundary>
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
