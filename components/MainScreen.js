import React, { Component } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { Icon } from "native-base";
import HomeTab from "./AppTabNavigator/HomeTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import SearchTab from "./AppTabNavigator/SearchTab";

export class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        name="ios-camera"
        style={{
          paddingLeft: 10
        }}
      />
    ),
    title: "Instaclone",
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />
  };

  render() {
    return <AppTabNavigator style={styles.container} />;
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
        })
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
