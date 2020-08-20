import React, { Component, createContext } from "react";
import { auth, completeSignInWithEmail } from "../../firebase";

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  constructor() {
    super();
    completeSignInWithEmail(window.location.href)
  }
  state = {
    user: null
  };

  componentDidMount = () => {
    auth.onAuthStateChanged(userAuth => {
      console.log(userAuth)
      this.setState({ user: userAuth});
      console.log(this.state.user)
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
