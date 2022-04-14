import * as React from "react";
import { View } from "react-native";

import container from "./container.styles";

type ContainerType = {
  children: JSX.Element;
};

const Container: React.FC<ContainerType> = ({ children }) => {
  return <View style={container}>{children}</View>;
};

export default Container;
