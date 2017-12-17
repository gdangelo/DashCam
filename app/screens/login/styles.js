const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 60 : 85,
    top: Platform.OS === "android" ? 35 : 60,
    width: 200,
    height: 120
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  button: {
    width: '60%',
    backgroundColor: "#D91E18",
    paddingTop: 30,
    paddingBottom: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  }
};
