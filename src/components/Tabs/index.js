import React from "react";
import { View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

const Tabs = () => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name="clone"
        size={16}
        style={[styles.icon, styles.active]}
      />
      <FontAwesome name="search" size={16} style={styles.icon} />

      <View style={styles.main}>
        <FontAwesome name="plus" size={16} style={styles.mainIcon} />
      </View>

      <FontAwesome name="bell-o" size={16} style={styles.icon} />
      <FontAwesome name="user-o" size={16} style={styles.icon} />
    </View>
  );
};

export default Tabs;
