import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { tab1: true, tab2: false, tab3: false };
  };

  toggleTab1() {
    this.setState({ tab1: true, tab2: false, tab3: false });
  };

  toggleTab2() {
    this.setState({ tab1: false, tab2: true, tab3: false });
  };

  toggleTab3() {
    this.setState({ tab1: false, tab2: false, tab3: true });
  };

  render() {
    return (
      <Container>
        <Header />
        <Content padder />
        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} name="list" />
              <Text>My Drives</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="camera" />
              <Text>Record</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="person" />
              <Text>My Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  };
};

export default Dashboard ;
