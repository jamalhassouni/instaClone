import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "native-base";

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Profile",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={"person"} size={26} style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> ProfileTab </Text>
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
