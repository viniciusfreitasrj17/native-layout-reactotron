import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={24}
        style={styles.icon}
        // color="black"
      />
      <Text style={styles.title}>Profile</Text>
      <Ionicons
        name="md-more"
        size={24}
        // color="black"
        style={styles.icon}
      />
    </View>
  );
};

export default Header;
