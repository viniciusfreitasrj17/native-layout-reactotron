import React from "react";
import { View, Image, Text } from "react-native";

import Button from "../Button";
import styles from "./styles";

// import { Container } from './styles';

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSuper}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Instagram</Text>
          <Text style={styles.bio}>
            Discovering and telling stories from around the world. Founded in
            2010 by @kevin and @mikeyk
          </Text>
        </View>

        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png",
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.firstButton}>Follow</Button>
        <Button type="outline">Message</Button>
      </View>
    </View>
  );
};

export default SubHeader;
