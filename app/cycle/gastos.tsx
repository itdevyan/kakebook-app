import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import defaultStyles from "@/constants/DefaultStyles";
import HeaderLogoMini from "@/components/HeaderLogoMini";
import BotonContinuar from "@/components/BotonContinuar";
import { Link } from "expo-router";
import cycleStyles from "@/styles/CycleStyles";
import DataConceptos from "./components/DataConceptos";
import { TIPO_CONCEPTO } from "@/constants/TipoConceptoEnum";

const data = []; // TODO: Eliminar, datos de ejemplo (aquí va manejador de estados)

const gastos = () => {
  return (
    <View style={[defaultStyles.principalFondo, gastosStyles.container]}>
      <HeaderLogoMini />
      <Text style={[defaultStyles.principalTexto, gastosStyles.title]}>
        Gastos
      </Text>
      <DataConceptos data={data} tipoConcepto={TIPO_CONCEPTO.GASTOS} />
      <View style={[defaultStyles.principalFondo, cycleStyles.buttonContainer]}>
        <Link href={"/gastos"} style={[gastosStyles.button]} asChild>
          <TouchableOpacity>
            <Text style={[gastosStyles.buttonText]}>+</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <BotonContinuar url="./gastos" />
    </View>
  );
};

const gastosStyles = StyleSheet.create({
  container: {
    flex: 1,
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

export default gastos;
