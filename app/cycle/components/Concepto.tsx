import { View, Text, StyleSheet } from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ConceptoProps {
  id: string;
  concepto: string;
  descripcion: string;
  categoria: string;
  monto: number;
}

const Concepto = ({ id, concepto, descripcion, monto }: ConceptoProps) => {
  return (
    <View style={[defaultStyles.principalFondo, conceptoStyles.container]}>
      {/* Container Imagen y concepto */}
      <View
        style={[
          defaultStyles.principalFondo,
          conceptoStyles.containerUserYConcepto,
        ]}
      >
        {/* Usuario */}
        <View style={conceptoStyles.containerIcon}>
          <Ionicons
            name={"person-circle-outline"}
            size={50}
            color="rgba(255,255,255,0.6)"
          />
        </View>
        {/* Concepto */}
        <View style={conceptoStyles.containerConcepto}>
          <Text
            style={[
              defaultStyles.principalTexto,
              conceptoStyles.titleConceptoText,
            ]}
          >
            {concepto}
          </Text>
          <Text
            style={[
              defaultStyles.principalTexto,
              conceptoStyles.descriptionConceptoText,
            ]}
          >
            {/* TODO: Limitar texto, y si excede, poner tres puntos ... */}
            {descripcion}
          </Text>
        </View>
      </View>

      {/* Monto */}
      <View
        style={[defaultStyles.principalFondo, conceptoStyles.montoContainer]}
      >
        <Text style={[defaultStyles.principalTexto, conceptoStyles.fechaText]}>
          03/10
        </Text>
        <Text style={[defaultStyles.principalTexto, conceptoStyles.montoText]}>
          {monto}
        </Text>
      </View>
    </View>
  );
};

export default Concepto;

const conceptoStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
  },
  containerUserYConcepto: {
    left: -5, // TODO: Dejar alineado con filtro sin utilizar "left" fijo
    flexDirection: "row",
    gap: 10,
    width: "70%",
  },
  containerIcon: {
    width: "20%",
  },

  containerConcepto: {
    flexDirection: "column",
    justifyContent: "center",
    width: "75%",
    // maxWidth: "80%", //TODO: Definir tamaño máximo en la descripción del concepto
  },
  titleConceptoText: {
    fontSize: 16,
  },
  descriptionConceptoText: {
    fontSize: 12,
  },
  montoContainer: {
    width: "30%",
    flexDirection: "column",
  },
  fechaText: {
    fontSize: 14,
    textAlign: "right",
  },
  montoText: {
    fontSize: 20,
    textAlign: "right",
  },
});
