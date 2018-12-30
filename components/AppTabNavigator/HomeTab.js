import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Right,
  Body
} from "native-base";
import CardComponent from "../CardComponent";
import { Font } from "expo";
import Stories from "../Stories";
export default class HomeTab extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Billabong: require("../../assets/fonts/Billabong.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={"ios-home"} size={26} style={{ color: tintColor }} />
    )
  };

  renderTitle = () => {
    if (this.state.fontLoaded) {
      return (
        <Text
          style={{
            fontFamily: "Billabong",
            fontSize: 30,
            marginTop: 10
          }}
        >
          Instaclone
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            fontSize: 25,
            marginTop: 10
          }}
        >
          Instaclone
        </Text>
      );
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Icon name="ios-camera" style={{ paddingLeft: 10 }} />
          </Left>
          <Body>{this.renderTitle()}</Body>
          <Right>
            <Icon name="ios-send" style={{ paddingRight: 10 }} />
          </Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Stories</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: "bold" }}> Watch all</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <Stories />
            </View>
          </View>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="441" />
          <CardComponent imageSource="3" likes="201" />
          <CardComponent imageSource="4" likes="401" />
          <CardComponent imageSource="5" likes="200" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
