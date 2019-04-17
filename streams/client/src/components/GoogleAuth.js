import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: "536781181026-c31nqnvsc75cq77oujkn34qldsoadplh.apps.googleusercontent.com",
        scope: 'email'
      })
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth
