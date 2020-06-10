import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

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

export default Product;
