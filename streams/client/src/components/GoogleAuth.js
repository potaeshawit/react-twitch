import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: "536781181026-c31nqnvsc75cq77oujkn34qldsoadplh.apps.googleusercontent.com",
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthDidChange);
      });
    });
  }

  onAuthDidChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  };

  renderAuthButton() {
    // try in console
    // > gapi.auth2.getAuthInstance().signIn()
    // > gapi.auth2.getAuthInstance().signOut()
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I'm signed in</div>;
    } else {
      return <div>I'm NOT signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth
