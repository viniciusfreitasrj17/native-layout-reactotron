import React from "react";
import { View, Image, Text } from "react-native";

// import styles from "./styles";

const Product = ({ item: product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}> {product.title} </Text>
      <Text style={styles.description}> {product.description} </Text>
      <Text style={styles.price}> {product.price} </Text>
    </View>
  );
};

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
    // width: 90,
    /** 45 porque 15 padding no left, no right e mais 15 no meio, 2 porque quero 2 produtos a cada linha */
  },
});

export default Product;
