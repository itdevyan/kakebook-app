import { View, Text, StyleSheet } from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";

const HeaderLogoMini = () => {
  return (
    <View
      style={[defaultStyles.principalFondo, headerLogoMiniStyles.container]}
    >
      <Text style={[defaultStyles.principalTexto, headerLogoMiniStyles.title]}>
        Kakebook
      </Text>
    </View>
  );
};

export default HeaderLogoMini;

const headerLogoMiniStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    paddingVertical: 10,
    fontSize: 22,
    fontWeight: 700,
  },
});
