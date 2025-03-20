import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import defaultStyles from "@/constants/DefaultStyles";
import HeaderLogoMini from "@/components/HeaderLogoMini";
import Ionicons from "@expo/vector-icons/Ionicons";
import modalComponentsStyles from "@/styles/ModalComponentsStyles";
import BotonContinuar from "@/components/BotonContinuar";

const resumen = () => {
  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View style={resumenStyles.container}>
        <HeaderLogoMini />
        <View style={resumenStyles.logo}>
          <Ionicons name={"bulb-outline"} size={100} color="white" />
          <Text style={defaultStyles.principalTexto}>Antes de comenzar...</Text>
        </View>
        <Text style={[defaultStyles.principalTexto, resumenStyles.titleText]}>
          Este es un resumen de lo que registraste
        </Text>
        <View style={[resumenStyles.tableContainer]}>
          <View style={[resumenStyles.subTableContainer]}>
            <Text style={[defaultStyles.principalTexto]}>Ingresos</Text>
            <Text style={[defaultStyles.principalTexto]}>$2.500.000</Text>
          </View>
          <View style={[resumenStyles.subTableContainer]}>
            <Text style={[defaultStyles.principalTexto]}>Gastos</Text>
            <Text style={[defaultStyles.principalTexto]}>$1.500.000</Text>
          </View>
        </View>
        <Text
          style={[defaultStyles.principalTexto, resumenStyles.subTotalText]}
        >
          Sub total
        </Text>
        <Text style={[defaultStyles.principalTexto, resumenStyles.totalText]}>
          $1.000.000
        </Text>
        <Text
          style={[defaultStyles.principalTexto, resumenStyles.conclusionText]}
        >
          No te preocupes, con este monto empezaremos bien este mes!
        </Text>
        <Text style={[defaultStyles.principalTexto, resumenStyles.titleText]}>
          ¿Cuáles son tus objetivos este mes?
        </Text>
        <View style={modalComponentsStyles.containerInput}>
          <TextInput
            placeholder="Mi objetivo para este mes es ordenar mis finanzas y comprender en que gasto dinero..."
            keyboardType="default"
            multiline
            numberOfLines={10}
            placeholderTextColor={"rgba(255,255,255,0.4)"}
            style={[
              defaultStyles.principalTexto,
              modalComponentsStyles.input,
              resumenStyles.inputMultiLine,
            ]}
          />
        </View>
        <BotonContinuar url={"./resumen"} title="Iniciar mes" />
      </View>
    </KeyboardAwareScrollView>
  );
};

const resumenStyles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
  },
  logo: {
    paddingTop: 10,
    gap: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
  tableContainer: {
    flexDirection: "column",
    gap: 10,
  },
  subTableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  subTotalText: {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
  },
  totalText: {
    marginTop: -15,
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center",
    color: "#2ebe5e",
  },
  conclusionText: {
    marginTop: -15,
    marginBottom: 10,
    paddingHorizontal: 20,
    fontSize: 12,
    textAlign: "center",
    fontStyle: "italic",
  },
  inputMultiLine: {
    height: 100,
  },
});

export default resumen;
