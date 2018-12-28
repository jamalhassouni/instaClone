import React, { Component } from "react";
import { StyleSheet, Platform } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import HomeTab from "./AppTabNavigator/HomeTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import { Font } from "expo";

export class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  static navigationOptions = {
    header: null
  };
  async componentDidMount() {
    await Font.loadAsync({
      Billabong: require("../assets/fonts/Billabong.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      this.state.fontLoaded && <AppTabNavigator style={styles.container} />
    );
  }
}

export default MainScreen;

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    SearchTab: {
      screen: SearchTab
    },
    AddMediaTab: {
      screen: AddMediaTab
    },
    LikesTab: {
      screen: LikesTab
    },
    ProfileTab: {
      screen: ProfileTab
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        }),
        shadowColor: "rgba(0, 0, 0, 0.24)"
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
