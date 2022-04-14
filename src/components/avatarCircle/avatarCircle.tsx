import * as React from "react";

import { Avatar } from "@rneui/themed";
import type { AvatarType } from "./avatarCircle.types";
import { StyleSheet, View } from "react-native";
import colorPalette from "../../config/colorPalette/colorPalette";
import { Skeleton } from "@rneui/base";

const AvatarCircle: React.FC<AvatarType> = ({ avatarUrl }) => {
  return (
    <View style={style.container}>
      {avatarUrl ? (
        <Avatar
          containerStyle={style.avatarStyle}
          rounded
          size={64}
          source={{ uri: avatarUrl }}
        />
      ) : (
        <Skeleton circle height={64} width={64} />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatarStyle: {
    borderWidth: 2,
    borderColor: colorPalette.darkRed,
  },
});

export default React.memo(AvatarCircle);
