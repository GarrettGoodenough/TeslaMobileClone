import React from "react";
import {
  View,
  Text,
  ImageBackground,
  NativeAppEventEmitter,
} from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles.js";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

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
        <StyledButton type="primary" content={"Custome Order"} />
        <StyledButton type="secondary" content={"Existing Inventory"} />
      </View>
    </View>
  );
};

export default CarItem;
