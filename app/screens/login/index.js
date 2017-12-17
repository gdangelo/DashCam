import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../images/launchscreen-bg.jpeg");
const launchscreenLogo = require("../../images/logo.png");

class Login extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>DashCam App</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>for Autonomous Driving</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={styles.button}
              onPress={this.props.onLogin}
            >
              <Text>Log in</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  };
};

export default Login;
