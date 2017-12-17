import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Header, Button, Text } from 'native-base';

const Login = ({ onLogin }) => {
  return (
    <Container style={styles.container}>
      <Content>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <Text style={styles.title}>Dashcam app for Autonomous Driving</Text>
        <Button block primary large onPress={onLogin}>
          <Text>Log in</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    marginBottom: 25,
    textAlign: 'center',
  },
});

export { Login };
