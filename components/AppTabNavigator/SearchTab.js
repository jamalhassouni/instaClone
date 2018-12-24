import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "native-base";

export default class SearchTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={"ios-search"} size={26} style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> SearchTab </Text>
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
