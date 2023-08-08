import React from "react";
import { View } from "react-native";
// AntDesign
import AntDesign from "@expo/vector-icons/AntDesign";
// Entypo
import Entypo from "@expo/vector-icons/Entypo";
// EvilIcons
import EvilIcons from "@expo/vector-icons/EvilIcons";
// Feather
import Feather from "@expo/vector-icons/Feather";
// FontAwesome
import FontAwesome from "@expo/vector-icons/FontAwesome";
// FontAwesome5

// Foundation
import Foundation from "@expo/vector-icons/Foundation";
// Ionicons
import Ionicons from "@expo/vector-icons/Ionicons";
// MaterialIcons
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// MaterialCommunityIcons
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// Octicons
import Octicons from "@expo/vector-icons/Octicons";
// Zocial
import Zocial from "@expo/vector-icons/Zocial";
// SimpleLineIcons
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const VectorIcon = (props) => {
  const { name, color, size, onPress, type, style } = props;

  let iconComponent;

  if (type === "AntDesign") {
    iconComponent = (
      <AntDesign onPress={onPress} name={name} color={color} size={size} />
    );
  } else if (type === "Entypo") {
    iconComponent = (
      <Entypo onPress={onPress} name={name} color={color} size={size} />
    );
  } else if (type === "EvilIcons") {
    iconComponent = (
      <EvilIcons onPress={onPress} name={name} color={color} size={size} />
    );
  } else if (type === "Feather") {
    iconComponent = (
      <Feather onPress={onPress} name={name} color={color} size={size} />
    );
  } else if (type === "FontAwesome") {
    iconComponent = (
      <FontAwesome onPress={onPress} name={name} color={color} size={size} />
    );
  } else if (type === "Fontisto") {
    iconComponent = (
      <Fontisto onPress={onPress} name={name} color={color} size={size} />
    );
  } else if (type === "Ionicons") {
    iconComponent = (
      <Ionicons onPress={onPress} name={name} color={color} size={size} />
    );
  } else if (type === "MaterialIcons") {
    iconComponent = (
      <MaterialIcons onPress={onPress} name={name} color={color} size={size} />
    );
  } else if (type === "MaterialCommunityIcons") {
    iconComponent = (
      <MaterialCommunityIcons
        onPress={onPress}
        name={name}
        color={color}
        size={size}
      />
    );
  } else if (type === "Octicons") {
    iconComponent = (
      <Octicons onPress={onPress} name={name} color={color} size={size} />
    );
  } else if (type === "Zocial") {
    iconComponent = (
      <Zocial onPress={onPress} name={name} color={color} size={size} />
    );
  } else if (type === "SimpleLineIcons") {
    iconComponent = (
      <SimpleLineIcons
        onPress={onPress}
        name={name}
        color={color}
        size={size}
      />
    );
  }

  return <View style={style}>{iconComponent}</View>;
};

export default VectorIcon;