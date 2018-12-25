import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import {
  Icon,
  Container,
  Content,
  Header,
  Right,
  Left,
  Body,
  Button
} from "native-base";
import EntyproIcon from "react-native-vector-icons/Entypo";
import CardComponnet from "../CardComponent";
const images = [
  require("../../assets/images/feed_images/7.jpg"),
  require("../../assets/images/feed_images/8.jpg"),
  require("../../assets/images/feed_images/9.jpg"),
  require("../../assets/images/feed_images/1.jpg"),
  require("../../assets/images/feed_images/2.jpg"),
  require("../../assets/images/feed_images/3.jpg"),
  require("../../assets/images/feed_images/4.jpg"),
  require("../../assets/images/feed_images/5.jpg"),
  require("../../assets/images/feed_images/6.jpg")
];
const { width, height } = Dimensions.get("window");
export default class ProfileTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  segmentClicked = index => {
    this.setState({
      activeIndex: index
    });
  };
  static navigationOptions = {
    tabBarLabel: "Profile",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={"person"} size={26} style={{ color: tintColor }} />
    )
  };

  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}
        >
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      );
    });
  };
  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {this.renderSectionOne()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardComponnet imageSource="7" likes="100" />
          <CardComponnet imageSource="8" likes="100" />
          <CardComponnet imageSource="9" likes="100" />
        </View>
      );
    }
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Icon name="md-person-add" style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text>jamal_hassouni</Text>
          </Body>
          <Right>
            <EntyproIcon
              name="back-in-time"
              style={{ paddingRight: 10, fontSize: 32 }}
            />
          </Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  source={require("../../assets/images/avatars/me.jpg")}
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 37.5
                  }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text>20</Text>
                    <Text style={{ fontSize: 14, color: "grey" }}>posts</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>206</Text>
                    <Text style={{ fontSize: 14, color: "grey" }}>
                      followers
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>167</Text>
                    <Text style={{ fontSize: 14, color: "grey" }}>
                      following
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 3,
                      marginLeft: 10,
                      justifyContent: "center",
                      height: 30
                    }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 1,
                      marginLeft: 5,
                      marginRight: 10,
                      justifyContent: "center",
                      height: 30
                    }}
                  >
                    <Icon name="settings" />
                  </Button>
                </View>
              </View>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Jamal Hassouni</Text>
              <Text>PHP | React & React Native Developer </Text>
              <Text>http://github.com/jamalhassouni</Text>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopWidth: 1,
                borderTopColor: "#eae5e5"
              }}
            >
              <Button
                transparent
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex == 0}
              >
                <Icon
                  name="md-apps"
                  style={[this.state.activeIndex == 0 ? {} : { color: "grey" }]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex == 1}
              >
                <Icon
                  name="ios-list"
                  style={[this.state.activeIndex == 1 ? {} : { color: "grey" }]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(2)}
                active={this.state.activeIndex == 2}
              >
                <Icon
                  name="ios-people"
                  style={[this.state.activeIndex == 2 ? {} : { color: "grey" }]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(3)}
                active={this.state.activeIndex == 3}
              >
                <Icon
                  name="ios-bookmark"
                  style={[this.state.activeIndex == 3 ? {} : { color: "grey" }]}
                />
              </Button>
            </View>
            {this.renderSection()}
          </View>
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
