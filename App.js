import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Font } from "expo";
import { createStackNavigator } from "react-navigation";
import MainScreen from "./components/MainScreen";

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      Billabong: require("./assets/fonts/Billabong.ttf")
    });
  }
  render() {
    return <AppStackNavigator />;
  }
}
const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
