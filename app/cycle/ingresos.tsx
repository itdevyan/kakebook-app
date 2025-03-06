import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import defaultStyles from "@/constants/DefaultStyles";
import HeaderLogoMini from "@/components/HeaderLogoMini";
import BotonContinuar from "@/components/BotonContinuar";
import { Link } from "expo-router";
import NoDataConceptos from "./components/NoDataConceptos";
import cycleStyles from "@/styles/CycleStyles";
import DataConceptos from "./components/DataConceptos";

const ingresos = () => {
  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View style={[defaultStyles.principalFondo, ingresosStyles.container]}>
        <HeaderLogoMini />
        <Text style={[defaultStyles.principalTexto, ingresosStyles.title]}>
          Ingresos
        </Text>
        {/* TODO: condicionar componente a mostrar según si la lista esta vacía */}
        <NoDataConceptos />
        {/* <DataConceptos /> */}
        <View
          style={[defaultStyles.principalFondo, cycleStyles.buttonContainer]}
        >
          <Link href={"/ingresos"} style={[ingresosStyles.button]} asChild>
            <TouchableOpacity>
              <Text style={[ingresosStyles.buttonText]}>+</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <BotonContinuar url="./ingresos" />
      </View>
    </KeyboardAwareScrollView>
  );
};

const ingresosStyles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: "600",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#163172",
  },
  buttonText: {
    color: "#fff",
    fontSize: 26,
    // TODO: Validar el centrado sin recurrir al top: -2
    top: -2,
    fontWeight: "600",
  },
});

export default ingresos;
