import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon, Container, Content } from "native-base";
import CardComponent from "../CardComponent";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={"ios-home"} size={26} style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
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
    backgroundColor: "white"
  }
});
