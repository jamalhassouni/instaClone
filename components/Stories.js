import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Icon, Thumbnail } from "native-base";
import GradientBox from "./GradientBox";
const colors = [
  //"#c32aa3",
  "#cd486b",
  // "#fbad50",
  "#f46f30",
  "#bc2a8d",
  "#e95950"
];
export default class Stories extends Component {
  username = name => {
    if (name.length >= 11) {
      return name.substring(0, 10) + "...";
    } else {
      return name;
    }
  };
  render() {
    return (
      <View style={{ height: 160 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 7
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Stories</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="md-play" style={{ fontSize: 14 }} />
            <Text style={{ fontWeight: "bold" }}> Watch all</Text>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              paddingStart: 5,
              paddingEnd: 5
            }}
          >
            <View style={styles.vbox}>
              <View style={{ padding: 5 }}>
                <Thumbnail
                  large
                  source={require("../assets/images/avatars/me.jpg")}
                />

                <Icon name="ios-add-circle" style={styles.addIcon} />
              </View>
              <Text style={styles.name}>Your Story</Text>
            </View>
            <View style={styles.vbox}>
              <GradientBox
                colors={colors}
                start={[1, 0]}
                end={[0, 1]}
                borderWidth={3}
                borderRadius={50}
                containerStyle={styles.containerStyle}
                style={{ padding: 3 }}
              >
                <Thumbnail
                  large
                  source={require("../assets/images/avatars/alexandergarcia.png")}
                />
              </GradientBox>
              <Text style={styles.name}>
                {this.username("alexandergarcia")}
              </Text>
            </View>
            <View style={styles.vbox}>
              <GradientBox
                colors={colors}
                start={[1, 0]}
                end={[0, 1]}
                borderWidth={3}
                borderRadius={50}
                containerStyle={styles.containerStyle}
                style={{ padding: 3 }}
              >
                <Thumbnail
                  large
                  source={require("../assets/images/avatars/andrea.schmidt.png")}
                />
              </GradientBox>
              <Text style={styles.name}>{this.username("schmidt_andrea")}</Text>
            </View>

            <View style={styles.vbox}>
              <GradientBox
                colors={colors}
                start={[1, 0]}
                end={[0, 1]}
                borderWidth={3}
                borderRadius={50}
                containerStyle={styles.containerStyle}
                style={{ padding: 3 }}
              >
                <Thumbnail
                  large
                  source={require("../assets/images/avatars/derek.russel.png")}
                />
              </GradientBox>
              <Text style={styles.name}>{this.username("derek_ussel")}</Text>
            </View>

            <View style={styles.vbox}>
              <GradientBox
                colors={colors}
                start={[1, 0]}
                end={[0, 1]}
                borderWidth={3}
                borderRadius={50}
                containerStyle={styles.containerStyle}
                style={{ padding: 3 }}
              >
                <Thumbnail
                  large
                  source={require("../assets/images/avatars/jmitch.png")}
                />
              </GradientBox>
              <Text style={styles.name}>{this.username("jmitch")}</Text>
            </View>

            <View style={styles.vbox}>
              <GradientBox
                colors={colors}
                start={[1, 0]}
                end={[0, 1]}
                borderWidth={3}
                borderRadius={50}
                containerStyle={styles.containerStyle}
                style={{ padding: 3 }}
              >
                <Thumbnail
                  large
                  source={require("../assets/images/avatars/monicaa.png")}
                />
              </GradientBox>
              <Text style={styles.name}>{this.username("monicaa")}</Text>
            </View>

            <View style={styles.vbox}>
              <GradientBox
                colors={colors}
                start={[1, 0]}
                end={[0, 1]}
                borderWidth={3}
                borderRadius={50}
                containerStyle={styles.containerStyle}
                style={{ padding: 3 }}
              >
                <Thumbnail
                  large
                  source={require("../assets/images/avatars/andrea.schmidt.png")}
                />
              </GradientBox>
              <Text style={styles.name}>{this.username("andrea.schmidt")}</Text>
            </View>
            <View style={styles.vbox}>
              <GradientBox
                colors={colors}
                start={[1, 0]}
                end={[0, 1]}
                borderWidth={3}
                borderRadius={50}
                containerStyle={styles.containerStyle}
                style={{ padding: 3 }}
              >
                <Thumbnail
                  large
                  source={require("../assets/images/avatars/derek.russel.png")}
                />
              </GradientBox>
              <Text style={styles.name}>{this.username("derek.russel")}</Text>
            </View>
            <View style={styles.vbox}>
              <GradientBox
                colors={colors}
                start={[1, 0]}
                end={[0, 1]}
                borderWidth={3}
                borderRadius={50}
                containerStyle={styles.containerStyle}
                style={{ padding: 3 }}
              >
                <Thumbnail
                  large
                  source={require("../assets/images/avatars/alexandergarcia.png")}
                />
              </GradientBox>
              <Text style={styles.name}>
                {this.username("alexandergarcia")}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    position: "relative",
    marginLeft: 6
  },
  vbox: {
    marginHorizontal: 2,
    marginVertical: 2,
    paddingHorizontal: 6,
    paddingVertical: 6,
    justifyContent: "space-between",
    alignItems: "center"
  },
  addIcon: {
    color: "#0097e6",
    position: "absolute",
    bottom: 0,
    right: -10,
    borderWidth: 4,
    borderRadius: 50,
    borderColor: "white"
  },
  name: {
    paddingVertical: 5
  }
});
