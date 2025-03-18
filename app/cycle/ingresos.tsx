import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import defaultStyles from "@/constants/DefaultStyles";
import HeaderLogoMini from "@/components/HeaderLogoMini";
import BotonContinuar from "@/components/BotonContinuar";
import { Link } from "expo-router";
import cycleStyles from "@/styles/CycleStyles";
import DataConceptos from "./components/DataConceptos";
import { DataProps } from "./components/ListConceptosIngresos";
import { TIPO_CONCEPTO } from "@/constants/TipoConceptoEnum";

const data = [
  {
    id: "1",
    concepto: "Sueldo",
    descripcion: "Renta recibida el mes actual",
    categoria: "Categoria 1",
    monto: 1000000,
  },
  {
    id: "2",
    concepto: "HHEE",
    descripcion: "Horas extras recibidas el mes actual",
    categoria: "Categoria 2",
    monto: 2000,
  },
  {
    id: "3",
    concepto: "HHEE",
    descripcion: "Horas extras recibidas el mes actual",
    categoria: "Categoria 3",
    monto: 3000,
  },
  {
    id: "4",
    concepto: "HHEE",
    descripcion: "Horas extras recibidas el mes actual",
    categoria: "Categoria 4",
    monto: 4000,
  },
  {
    id: "5",
    concepto: "HHEE",
    descripcion: "Horas extras recibidas el mes actual",
    categoria: "Categoria 5",
    monto: 5000,
  },
  {
    id: "6",
    concepto: "HHEE",
    descripcion:
      "Horas extras recibidas el mes actual Horas extras recibidas el mes actual",
    categoria: "Categoria 6",
    monto: 6000,
  },
  {
    id: "7",
    concepto: "HHEE",
    descripcion:
      "Horas extras recibidas el mes Horas extras recibidas el Horas extras recibidas el mes actual actual",
    categoria: "Categoria 7",
    monto: 7500000,
  },
  {
    id: "8",
    concepto: "HHEE",
    descripcion: "Horas extras recibidas el mes actual",
    categoria: "Categoria 8",
    monto: 8000,
  },
  {
    id: "9",
    concepto: "HHEE",
    descripcion: "Horas extras recibidas el mes actual",
    categoria: "Categoria 9",
    monto: 9000,
  },
  {
    id: "10",
    concepto: "HHEE",
    descripcion: "Horas extras recibidas el mes actual",
    categoria: "Categoria 10",
    monto: 10000,
  },
];

const ingresos = () => {
  return (
    // <KeyboardAwareScrollView
    //   // nestedScrollEnabled={true}
    //   // keyboardShouldPersistTaps="handled"
    //   bottomOffset={50}
    //   style={[defaultStyles.principalFondo]}
    //   contentContainerStyle={[defaultStyles.principalFondo]}
    // >
    <View style={[defaultStyles.principalFondo, ingresosStyles.container]}>
      <HeaderLogoMini />
      <Text style={[defaultStyles.principalTexto, ingresosStyles.title]}>
        Ingresos
      </Text>
      <DataConceptos data={data} tipoConcepto={TIPO_CONCEPTO.INGRESOS} />
      <View style={[defaultStyles.principalFondo, cycleStyles.buttonContainer]}>
        <Link href={"/ingresos"} style={[ingresosStyles.button]} asChild>
          <TouchableOpacity>
            <Text style={[ingresosStyles.buttonText]}>+</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <BotonContinuar url="./gastos" />
    </View>
    // </KeyboardAwareScrollView>
  );
};

const ingresosStyles = StyleSheet.create({
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

export default ingresos;
