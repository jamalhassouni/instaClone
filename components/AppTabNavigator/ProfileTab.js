import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
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

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Profile",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={"person"} size={26} style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Icon name="md-person-add" style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text>Jamal Hassouni</Text>
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
