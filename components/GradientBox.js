import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo";
import PropTypes from "prop-types";
/**
 *
 * Component of box with Gradient border
 */
const GradientBox = ({
  colors,
  start,
  end,
  location,
  borderWidth,
  borderRadius,
  backgroundColor,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      location={location}
      style={[
        {
          padding: borderWidth,
          borderRadius
        },
        containerStyle
      ]}
    >
      <View
        style={[
          borderRadius && { borderRadius },
          { backgroundColor: backgroundColor || "#fff" },
          style
        ]}
        children={props.children}
        {...props}
      />
    </LinearGradient>
  );
};

GradientBox.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  start: PropTypes.arrayOf(PropTypes.number),
  end: PropTypes.arrayOf(PropTypes.number),
  location: PropTypes.arrayOf(PropTypes.number),
  borderWidth: PropTypes.number.isRequired,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  containerStyle: PropTypes.object,
  style: PropTypes.object
};

export default GradientBox;
