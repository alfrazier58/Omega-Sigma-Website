import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Login extends React.Component {
  componentDidMount() {
    this.props.onDidMount();
  }
  
  render() {
    return (
      <a id='login-btn'>
        <img src={require("./images/Login_logo.png")} width="29px" />
        <h2>Member Login</h2>
      </a>
    );
  }
}

Login.propTypes = {
  userImageUrl: PropTypes.string,
  onDidMount: PropTypes.func,
  onUserLogoClick: PropTypes.func
}

export default Login;