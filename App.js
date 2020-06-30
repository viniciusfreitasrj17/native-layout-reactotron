import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Header from "./src/components/Header";
import SubHeader from "./src/components/SubHeader";
import ProductList from "./src/components/ProductList";
import Tabs from "./src/components/Tabs";

import "./src/config/reactotronConfig";

function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <SafeAreaProvider>
          <SubHeader />
          <ProductList />
        </SafeAreaProvider>
      </ScrollView>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8fa",
  },
});

export default console.tron.overlay(App);
