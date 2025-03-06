import { View, Text, StyleSheet } from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

const HeaderLogin = () => {
  return (
    <>
      <Text style={[defaultStyles.principalTexto, headerLoginStyles.title]}>
        Kakebook
      </Text>
      <View
        style={[
          defaultStyles.principalImagenPredeterminada,
          headerLoginStyles.imageContainer,
        ]}
      >
        <Ionicons
          name={"book-outline"}
          size={120}
          color="#fff"
          style={headerLoginStyles.logo}
        />
      </View>
    </>
  );
};

const headerLoginStyles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 500,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    alignSelf: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    borderRadius: 100,
    opacity: 0.8,
    alignSelf: "center",
    marginBottom: 30,
    backgroundColor: "#3e67b7",
  },
});

export default HeaderLogin;
