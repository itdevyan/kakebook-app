import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import defaultStyles from "@/constants/DefaultStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import BotonContinuar from "@/components/BotonContinuar";

const welcome = () => {
  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View style={welcomeStyles.container}>
        <View style={welcomeStyles.textLogoContainer}>
          <Text style={[welcomeStyles.textLogo1, defaultStyles.principalTexto]}>
            Bienvenidos a
          </Text>
          <Text style={[welcomeStyles.textLogo2, defaultStyles.principalTexto]}>
            Kakebook
          </Text>
          <Text style={[welcomeStyles.textLogo3, defaultStyles.principalTexto]}>
            Yandiel
          </Text>
        </View>
        <View
          style={[
            defaultStyles.principalImagenPredeterminada,
            welcomeStyles.imageContainer,
          ]}
        >
          <Ionicons
            name={"person-outline"}
            size={100}
            color="#fff"
            style={welcomeStyles.logo}
          />
        </View>
        <View>
          <Text
            style={[
              welcomeStyles.textDescription,
              defaultStyles.principalTexto,
            ]}
          >
            Antes de iniciar, comenzaremos a preguntarte algunas cosas para
            configurar mejor tu experiencia en Kakebook
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <BotonContinuar url="./currentSelector" />
      </View>
    </KeyboardAwareScrollView>
  );
};

const welcomeStyles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
  },
  textLogoContainer: {
    paddingTop: 50,
    paddingHorizontal: 40,
  },
  textLogo1: {
    textAlign: "left",
    fontWeight: 300,
    fontSize: 22,
  },
  textLogo2: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 36,
  },
  textLogo3: {
    textAlign: "right",
    fontWeight: 400,
    fontSize: 32,
  },
  logo: {
    alignSelf: "center",
  },
  imageContainer: {
    width: 170,
    height: 170,
    justifyContent: "center",
    borderRadius: 100,
    opacity: 0.8,
    alignSelf: "center",
    marginBottom: 30,
    backgroundColor: "#3e67b7",
  },
  textDescription: {
    fontSize: 18,
  },
});

export default welcome;
