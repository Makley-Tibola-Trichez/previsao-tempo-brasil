import * as React from "react";
import { StyleSheet } from "react-native";
import textStyles from "./text.styles";
import TextProps from "./text.types";

type useTextParam = TextProps["type"];

function useTextType(type: useTextParam) {
  if (typeof type === "undefined") {
    return textStyles.normal;
  }

  return textStyles[type];
}

export default useTextType;
