import React, { Component } from "react";
import { Text, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Button,
  Icon
} from "native-base";

class CardComponnet extends Component {
  render() {
    const images = {
      "1": require("../assets/images/feed_images/1.jpg"),
      "2": require("../assets/images/feed_images/2.jpg"),
      "3": require("../assets/images/feed_images/3.jpg"),
      "4": require("../assets/images/feed_images/4.jpg"),
      "5": require("../assets/images/feed_images/5.jpg"),
      "6": require("../assets/images/feed_images/6.jpg"),
      "7": require("../assets/images/feed_images/7.jpg"),
      "8": require("../assets/images/feed_images/8.jpg"),
      "9": require("../assets/images/feed_images/9.jpg")
    };

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../assets/images/avatars/me.jpg")} />
            <Body>
              <Text>Jamal Hassouni</Text>
              <Text note> Dec 26, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ height: 400, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20 }}>
          <Text>{this.props.likes}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>Jamal Hassouni </Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam
              nihil optio et similique nulla placeat earum, quasi non expedita
              quas mollitia, facilis autem praesentium consectetur nobis enim
              impedit incidunt?
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
export default CardComponnet;
