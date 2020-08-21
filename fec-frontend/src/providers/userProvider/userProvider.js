import React, { Component, createContext } from "react";
import { auth, completeSignInWithEmail } from "../../firebase";
import axios from "axios";

export const UserContext = createContext({ user: null, users: [] });
class UserProvider extends Component {
  constructor() {
    super();
    completeSignInWithEmail(window.location.href)
  }
  state = {
    user: null,
    users: []
  };

  componentDidMount = () => {

    auth.onAuthStateChanged(userAuth => {

      this.setState({ user: userAuth});
      if(this.state.user) {
        axios.get('https://us-central1-employee-reviewer-f9da9.cloudfunctions.net/webApi/employees').then((response) => {
          this.setState({users: response.data})
        })
      }



    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
