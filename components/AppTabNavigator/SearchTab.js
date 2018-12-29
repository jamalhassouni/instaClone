import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions
} from "react-native";
import {
  Icon,
  Input,
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Thumbnail
} from "native-base";
import PhotoGrid from "../PhotoGrid";
import { images } from "../../constants.json";
const { width, height } = Dimensions.get("window");

export default class SearchTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={"ios-search"} size={26} style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Icon
              name="search"
              size={26}
              type="Feather"
              style={{ paddingLeft: 10 }}
            />
          </Left>
          <Body>
            <Input placeholder="Search" />
          </Body>
          <Right>
            <Icon
              name="image-filter-center-focus-weak"
              size={26}
              type="MaterialCommunityIcons"
              style={{ paddingRight: 10, fontSize: 32 }}
            />
          </Right>
        </Header>
        <Content>
          <View style={{ flex: 3 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingStart: 10,
                paddingEnd: 10,
                marginVertical: 5,
                marginHorizontal: 5
              }}
            >
              <View
                style={{
                  width: width / 3,
                  height: width / 3
                }}
              >
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  blurRadius={6}
                  style={styles.backgroundImage}
                  source={require("../../assets/images/avatars/me.jpg")}
                >
                  <View style={styles.absoluteView}>
                    <Thumbnail
                      style={styles.thumbnail}
                      source={require("../../assets/images/avatars/me.jpg")}
                    />
                    <Text style={styles.text}>For You</Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 7,
                  width: width / 3,
                  height: width / 3
                }}
              >
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  style={styles.backgroundImage}
                  source={{ uri: "http://lorempixel.com/400/400/fashion" }}
                >
                  <View style={styles.absoluteView}>
                    <Text style={styles.textOnly}>Fashion</Text>
                  </View>
                </ImageBackground>
              </View>

              <View
                style={{
                  flex: 1,
                  marginHorizontal: 7,
                  width: width / 3,
                  height: width / 3
                }}
              >
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  style={styles.backgroundImage}
                  source={{ uri: "http://lorempixel.com/400/400/sports" }}
                >
                  <View style={styles.absoluteView}>
                    <Text style={styles.textOnly}>Sports</Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 7,
                  width: width / 3,
                  height: width / 3
                }}
              >
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  style={styles.backgroundImage}
                  source={{ uri: "http://lorempixel.com/400/400/business" }}
                >
                  <View style={styles.absoluteView}>
                    <Text style={styles.textOnly}>Business</Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 7,
                  width: width / 3,
                  height: width / 3
                }}
              >
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  style={styles.backgroundImage}
                  source={{ uri: "http://lorempixel.com/400/400/food" }}
                >
                  <View style={styles.absoluteView}>
                    <Text style={styles.textOnly}>Food</Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 7,
                  width: width / 3,
                  height: width / 3
                }}
              >
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  style={styles.backgroundImage}
                  source={{ uri: "http://lorempixel.com/400/400/nightlife" }}
                >
                  <View style={styles.absoluteView}>
                    <Text style={styles.textOnly}>Nightlife</Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 7,
                  width: width / 3,
                  height: width / 3
                }}
              >
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  style={styles.backgroundImage}
                  source={{ uri: "http://lorempixel.com/400/400/cats" }}
                >
                  <View style={styles.absoluteView}>
                    <Text style={styles.textOnly}>Cats</Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 7,
                  width: width / 3,
                  height: width / 3
                }}
              >
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  style={styles.backgroundImage}
                  source={{ uri: "http://lorempixel.com/400/400/people" }}
                >
                  <View style={styles.absoluteView}>
                    <Text style={styles.textOnly}>People</Text>
                  </View>
                </ImageBackground>
              </View>
            </ScrollView>
          </View>
          <View style={{ flexDirection: "row" }}>
            <ScrollView>
              <PhotoGrid PhotosList={images} borderRadius={5} />
            </ScrollView>
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
  },
  thumbnail: {
    marginHorizontal: 5,
    borderColor: "white",
    borderWidth: 2
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    justifyContent: "center"
  },
  absoluteView: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: 19,
    fontWeight: "300",
    borderBottomWidth: 2,
    borderColor: "white"
  },
  textOnly: {
    position: "absolute",
    top: 15,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: 19,
    fontWeight: "300"
  }
});
