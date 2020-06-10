import React, { useState } from "react";
import { FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import styles from "./styles";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=28010875",
      title: "Acne Studios",
      description: "Andrea nappa dusty pink",
      price: "R$50,00",
    },
    {
      id: 2,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      title: "Acne Studios",
      description: "Lain pop sky blue",
      price: "R$70,00",
    },
    {
      id: 3,
      image:
        "https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=28010875",
      title: "Acne Studios",
      description: "Andrea nappa dusty pink",
      price: "R$30,00",
    },
    {
      id: 4,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      title: "Acne Studios",
      description: "Lain pop sky blue",
      price: "R$70,00",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={Product}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default ProductList;
