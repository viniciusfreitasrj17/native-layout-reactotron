import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: metrics.headerHeight,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    borderBottomWidth: 1,
    borderColor: colors.lighter,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 22,
  },

  icon: {
    color: colors.primaty,
  },

  title: {
    fontSize: fonts.big,
  },
});

export default styles;
