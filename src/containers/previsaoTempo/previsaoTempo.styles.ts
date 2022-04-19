import { StyleSheet } from "react-native";
import colorPalette from "../../config/colorPalette/colorPalette";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.white.light,
    alignItems: "center",
  },
  header: {
    marginTop: 16,
  },
});

export default styles;
