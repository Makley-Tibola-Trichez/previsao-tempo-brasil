import * as React from "react";
import { View } from "react-native";
import styles from "./row.styles";
import type { RowType } from "./row.types";

const Row: React.FC<RowType> = ({ children }) => {
  return (
    <View style={styles.row}>
      <>{children}</>
    </View>
  );
};

export default Row;
