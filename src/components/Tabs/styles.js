import { StyleSheet } from "react-native";
import { colors, metrics, fonts } from "../../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: metrics.tabBarHeight,
    paddingHorizontal: metrics.padding,
    borderTopWidth: 1,
    borderColor: colors.lighter,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  icon: {
    color: colors.light,
  },

  active: {
    color: colors.primaty,
  },

  mainIcon: {
    color: colors.white,
  },

  main: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaty,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
