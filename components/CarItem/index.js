import React from "react";
import {
  View,
  Text,
  ImageBackground,
  NativeAppEventEmitter,
  Linking,
} from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles.js";

const CarItem = (props) => {
  const {
    name,
    tagline,
    taglineCTA,
    image,
    secondaryUrl,
    primaryUrl,
    content,
  } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custome Order"}
          onPress={() => {
            Linking.openURL(`${primaryUrl}`);
          }}
        />
        <StyledButton
          type="secondary"
          content={content}
          onPress={() => {
            Linking.openURL(`${secondaryUrl}`);
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
