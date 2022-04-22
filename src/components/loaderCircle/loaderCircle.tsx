import * as React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type LoaderCircleProps = {
  isLoading: boolean;
};

const LoaderCircle: React.FC<LoaderCircleProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <View style={styles.spinnerView}>
          <ActivityIndicator size={"large"} color="#2b2b2b" />
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  spinnerView: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF88",
  },
});
export default LoaderCircle;
