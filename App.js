import React, { Component } from 'react';
import { Platform, Alert } from 'react-native';
import { Container } from 'native-base';
import Login from './app/screens/login';
import Dashboard from './app/screens/dashboard';

import Auth0 from 'react-native-auth0';

var credentials = require('./app/auth0-credentials');
const auth0 = new Auth0(credentials);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null };
  };

  _onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://' + credentials.domain + '/userinfo'
      })
      .then(credentials => {
        Alert.alert(
          'Success',
          'AccessToken: ' + credentials.accessToken,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
        this.setState({ accessToken: credentials.accessToken });
      })
      .catch(error => console.log(error));
  };

  _onLogout = () => {
    if (Platform.OS === 'android') {
      this.setState({ accessToken: null });
    } else {
      auth0.webAuth
        .clearSession({})
        .then(success => {
          this.setState({ accessToken: null });
        })
        .catch(error => console.log(error));
    }
  };

  render() {
    let loggedIn = this.state.accessToken === null ? false : true;
    return (
      <Container>
        { loggedIn ? <Dashboard /> : <Login onLogin={this._onLogin}/> }
      </Container>
    );
  };
};
