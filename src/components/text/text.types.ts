import React from "react";
import { GestureResponderEvent, StyleProp, TextStyle } from "react-native";

type TextProps = {
  type?: "bold" | "normal" | "title";
  style?: StyleProp<TextStyle>;
  onPress?: (ev: GestureResponderEvent) => void;
};

export default TextProps;
