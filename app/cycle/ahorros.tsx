import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import defaultStyles from "@/constants/DefaultStyles";
import HeaderLogoMini from "@/components/HeaderLogoMini";
import { Link } from "expo-router";

const ahorros = () => {
  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View style={[defaultStyles.principalFondo, ahorrosStyles.container]}>
        <HeaderLogoMini />
        <Text style={[defaultStyles.principalTexto, ahorrosStyles.title]}>
          Ahorros
        </Text>
        <View style={ahorrosStyles.buttonContainer}>
          <Link href={"./ahorrosConfig"} asChild>
            <TouchableOpacity style={ahorrosStyles.button}>
              <Text
                style={[defaultStyles.principalTexto, ahorrosStyles.buttonText]}
              >
                Quiero configurar mi plan de ahorro
              </Text>
            </TouchableOpacity>
          </Link>
          <Link href={"./resumen"} asChild>
            <TouchableOpacity style={ahorrosStyles.button}>
              <Text
                style={[defaultStyles.principalTexto, ahorrosStyles.buttonText]}
              >
                Continuar y configurar después
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const ahorrosStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: "600",
  },
  buttonContainer: {
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  buttonText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 16,
    fontWeight: 600,
  },
});

export default ahorros;
