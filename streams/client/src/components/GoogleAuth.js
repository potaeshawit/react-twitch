import React from 'react';
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: "536781181026-c31nqnvsc75cq77oujkn34qldsoadplh.apps.googleusercontent.com",
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthDidChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthDidChange);
      });
    });
  }

  onAuthDidChange = isSignedIn => {
    isSignedIn ?
      this.props.signIn(this.auth.currentUser.get().getId()) :
      this.props.signOut();
  };

  onSignInDidClick = () => {
    this.auth.signIn();
  };

  onSignOutDidClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    // try in console
    // > gapi.auth2.getAuthInstance().signIn()
    // > gapi.auth2.getAuthInstance().signOut()
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutDidClick} className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInDidClick} className="ui red google button">
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
