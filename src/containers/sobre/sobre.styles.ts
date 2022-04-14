import { StyleSheet } from "react-native";
import colorPalette from "../../config/colorPalette/colorPalette";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.white.light,
    alignItems: "center",
  },
  bodyContent: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  link: {
    marginTop: 8,
    color: colorPalette.blue.primary,
  },
  divider: {
    marginVertical: 8,
  },
});

export default styles;
