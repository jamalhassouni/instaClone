import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Container,
  Content,
  Icon,
  Tab,
  Tabs,
  Thumbnail,
  Right,
  Left,
  Body
} from "native-base";
import LikeOrFollow from "../LikeOrFollow";
import GradientBox from "../GradientBox";
import { storyColors } from "../utils/Colors";

export default class LikesTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Likes",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={"ios-heart"} size={26} style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container>
        <Content>
          <Tabs tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
            <Tab
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
              textStyle={styles.textStyle}
              heading="FOLLOWING"
            >
              <View>
                <Text>tab One</Text>
              </View>
            </Tab>
            <Tab
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}
              textStyle={styles.textStyle}
              heading="YOU"
            >
              <LikeOrFollow
                ago="3s"
                from="alexandergarcia"
                hasStory
                type="like"
                avatar={require("../../assets/images/avatars/alexandergarcia.png")}
                image={{
                  uri:
                    "https://raw.githubusercontent.com/jamalhassouni/instaClone/master/assets/images/feed_images/7.jpg"
                }}
                text="Awesome!"
              />
              <LikeOrFollow
                ago="25m"
                from="derek.russel"
                type="follow"
                avatar={require("../../assets/images/avatars/derek.russel.png")}
              />
              <LikeOrFollow
                ago="11h"
                from="monicaa"
                hasStory
                type="likedYourpost"
                avatar={require("../../assets/images/avatars/monicaa.png")}
                image={require("../../assets/images/feed_images/9.jpg")}
              />
              <LikeOrFollow
                from="infinite_fun"
                to="jamal_hassouni"
                avatar={require("../../assets/images/avatars/andrea.schmidt.png")}
                image={require("../../assets/images/avatars/andrea.schmidt.png")}
                type="comment"
                text="Thank you!"
                ago="19h"
              />
              <LikeOrFollow
                ago="1d"
                from="jmitch"
                type="follow"
                avatar={require("../../assets/images/avatars/jmitch.png")}
              />
              <LikeOrFollow
                hasStory
                from="jmitch"
                to="jamal_hassouni"
                avatar={require("../../assets/images/avatars/jmitch.png")}
                image={require("../../assets/images/feed_images/8.jpg")}
                type="comment"
                text="Awesome!"
                ago="2d"
              />
              <LikeOrFollow
                from="infinite_fun"
                to="jamal_hassouni"
                avatar={require("../../assets/images/avatars/andrea.schmidt.png")}
                image={require("../../assets/images/feed_images/6.jpg")}
                type="likedYourpost"
                ago="3d"
              />
              <LikeOrFollow
                hasStory
                from="jmitch"
                to="jamal_hassouni"
                avatar={require("../../assets/images/avatars/jmitch.png")}
                image={require("../../assets/images/feed_images/8.jpg")}
                type="comment"
                text="Awesome!"
                ago="3d"
              />
              <LikeOrFollow
                ago="11h"
                from="alexandergarcia"
                hasStory
                type="like"
                avatar={require("../../assets/images/avatars/alexandergarcia.png")}
                image={{
                  uri:
                    "https://raw.githubusercontent.com/jamalhassouni/instaClone/master/assets/images/feed_images/7.jpg"
                }}
                text="Awesome!"
              />
              <LikeOrFollow
                ago="5d"
                from="derek.russel"
                type="follow"
                avatar={require("../../assets/images/avatars/derek.russel.png")}
                image={require("../../assets/images/avatars/derek.russel.png")}
              />
              <LikeOrFollow
                from="infinite_fun"
                to="jamal_hassouni"
                avatar={require("../../assets/images/avatars/andrea.schmidt.png")}
                image={require("../../assets/images/avatars/andrea.schmidt.png")}
                type="comment"
                text="Thank you!"
                ago="1y"
              />
              <LikeOrFollow
                hasStory
                from="jmitch"
                to="jamal_hassouni"
                avatar={require("../../assets/images/avatars/jmitch.png")}
                image={require("../../assets/images/feed_images/8.jpg")}
                type="comment"
                text="Awesome!"
                ago="1y"
              />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  tabStyle: {
    backgroundColor: "white"
  },
  tabBarUnderlineStyle: {
    borderBottomWidth: 2,
    borderColor: "black"
  },
  activeTabStyle: {
    backgroundColor: "white"
  },
  activeTextStyle: {
    color: "black",
    fontWeight: "bold"
  },
  textStyle: {
    color: "gray",
    fontWeight: "bold"
  }
});
