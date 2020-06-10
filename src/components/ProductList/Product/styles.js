import { StyleSheet, Dimensions } from "react-native";
import { metrics, colors, fonts } from "../../../styles";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    marginBottom: metrics.padding,
    shadowColor: colors.light,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    width: (width - 45) / 2,
    /** 45 porque 15 padding no left, no right e mais 15 no meio, 2 porque quero 2 produtos a cada linha */
  },
});

export default styles;
