import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Thumbnail, Button } from "native-base";
import GradientBox from "./GradientBox";
import { storyColors } from "./utils/Colors";
import PropTypes from "prop-types";

class LikeOrFollow extends Component {
  constructor(props) {
    super(props);
  }

  renderAvatar = source => {
    if (this.props.hasStory) {
      return (
        <GradientBox
          colors={storyColors}
          start={[1, 0]}
          end={[0, 1]}
          borderWidth={3}
          borderRadius={50}
          containerStyle={{ flex: 1 }}
          style={{ padding: 0 }}
        >
          <Thumbnail source={this.props.avatar} />
        </GradientBox>
      );
    } else {
      return (
        <Image
          source={this.props.avatar}
          style={{
            width: 60,
            height: 60,
            borderRadius: 37.5
          }}
        />
      );
    }
  };
  renderBox = () => {
    if (this.props.type === "follow") {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10
          }}
        >
          <View style={styles.leftContainer}>{this.renderAvatar()}</View>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              width: 0,
              flexGrow: 1
            }}
          >
            <Text style={styles.text}>
              <Text style={styles.name}>{this.props.from}</Text>
              <Text> started following you</Text>
              <Text style={styles.note}> {this.props.ago}</Text>
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Button
              iconRight
              bordered
              small
              style={{
                backgroundColor: "#0097e6",
                borderColor: "#0097e6",
                justifyContent: "center",
                padding: 4,
                borderRadius: 4,
                //marginRight: 10,
                height: 30
              }}
            >
              <Text style={{ color: "white" }}>Follow</Text>
            </Button>
          </View>
        </View>
      );
    } else if (this.props.type === "like") {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10
          }}
        >
          <View style={styles.leftContainer}>{this.renderAvatar()}</View>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              width: 0,
              flexGrow: 1
            }}
          >
            <Text style={styles.text}>
              <Text style={styles.name}>{this.props.from}</Text>
              <Text> liked your comment: {this.props.text}</Text>
              <Text style={styles.note}> {this.props.ago}</Text>
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Thumbnail square source={this.props.image} />
          </View>
        </View>
      );
    } else if (this.props.type === "likedYourpost") {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10
          }}
        >
          <View style={styles.leftContainer}>{this.renderAvatar()}</View>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              width: 0,
              flexGrow: 1
            }}
          >
            <Text style={styles.text}>
              <Text style={styles.name}>{this.props.from}</Text>
              <Text> liked your post. </Text>
              <Text style={styles.note}> {this.props.ago}</Text>
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Thumbnail square source={this.props.image} />
          </View>
        </View>
      );
    } else if (this.props.type === "comment") {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10
          }}
        >
          <View style={styles.leftContainer}>{this.renderAvatar()}</View>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              width: 0,
              flexGrow: 1
            }}
          >
            <Text style={styles.text}>
              <Text style={styles.name}>{this.props.from}</Text>
              <Text>
                {" "}
                mentioned you in a comment:
                <Text style={{ color: "#0097e6" }}> @{this.props.to}</Text>{" "}
                {this.props.text}
              </Text>
              <Text style={styles.note}> {this.props.ago}</Text>
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Thumbnail square source={this.props.image} />
          </View>
        </View>
      );
    }
  };
  render() {
    return <ScrollView>{this.renderBox()}</ScrollView>;
  }
}
const styles = StyleSheet.create({
  leftContainer: {
    marginHorizontal: 5
  },
  rightContainer: {
    alignItems: "center",
    paddingHorizontal: 5
  },
  name: {
    marginRight: 5,
    fontWeight: "500"
  },
  text: {
    marginHorizontal: 5,
    fontSize: 14
  },
  note: {
    fontSize: 12,
    color: "gray"
  }
});
LikeOrFollow.propTypes = {
  avatar: PropTypes.any.isRequired,
  image: PropTypes.any,
  from: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  to: PropTypes.string,
  ago: PropTypes.string,
  hasStory: PropTypes.bool,
  text: PropTypes.string
};
export default LikeOrFollow;
