import React from 'react';
import Login from './Login';

class LoginConnector extends React.Component {
    constructor() {
      super();
      //Event handlers binding
      this.initAuth2 = this.initAuth2.bind(this);
      //Reference to auth2 object
      this.auth2 = null;
      //State initialization
      this.state = {
        user: {
            signedIn: false,
        }
      };
    }

    render() {
      return <Login onDidMount={this.initAuth2} userImageUrl={this.state.user.userImageUrl} />
    }

    initAuth2() {
      window.app.gapiPromise.then(() => {
        window.gapi.load('auth2', () => {
          // Retrieve the singleton for the GoogleAuth library and set up the client.
          this.auth2 = window.gapi.auth2.init({
            client_id: '1044693233516-kh705h38np3in34ni6io8jfvj821gffn.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            ux_mode: 'redirect',
            redirect_uri: 'http://localhost:3000/members',
            hosted_domain: 'mst.edu'
          });
          this.attachSignin(document.getElementById('login-btn'));
        });
      })
    }

    attachSignin(element) {
        const signInCb = this.onSignIn.bind(this);
        this.auth2.attachClickHandler(element, {}, signInCb,
            function (error) {
                console.log(JSON.stringify(error, undefined, 2));
            });
    }

    onSignIn(googleUser) {
        let profile = googleUser.getBasicProfile();
        const user = {
            email: profile.getEmail(),
            name: profile.getName(),
            userImageUrl: profile.getImageUrl()
        };
        console.log(user);
        this.setState({
            signedIn: true
        });
    }
}

export default LoginConnector;