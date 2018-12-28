import React from "react";
import { createStackNavigator } from "react-navigation";
import MainScreen from "./components/MainScreen";

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}
const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});
