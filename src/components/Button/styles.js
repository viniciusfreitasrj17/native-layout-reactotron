import { StyleSheet } from "react-native";
import { metrics, colors, fonts } from "../../styles";

const styles = StyleSheet.create({
  container: {
    height: 31,
    backgroundColor: colors.primaty,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: metrics.padding,
  },

  "button-outline": {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primaty,
  },

  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fonts.small,
  },

  "text-outline": {
    color: colors.primaty,
  },
});

export default styles;
