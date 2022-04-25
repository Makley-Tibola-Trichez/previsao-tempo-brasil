import * as React from "react";
import type TextProps from "./text.types";
import { Text as RText } from "react-native";

import useTextType from "./useTextType";

const Text: React.FC<TextProps> = ({
  children,
  type = "normal",
  style,
  onPress,
}) => {
  const _textType = useTextType(type);

  return (
    <RText style={[_textType, style]} onPress={onPress}>
      <>{children}</>
    </RText>
  );
};

export default Text;
