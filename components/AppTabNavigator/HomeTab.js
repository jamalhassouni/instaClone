import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "native-base";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={"ios-home"} size={26} style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> HomeTab </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
