import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Svg, { G, Polygon } from "react-native-svg";
import defaultStyles from "@/constants/DefaultStyles";
import cycleStyles from "@/styles/CycleStyles";

const NoDataConceptos = () => {
  return (
    <>
      <Text style={[defaultStyles.principalTexto, noDataConceptos.informacion]}>
        Puedes comenzar registrando tus ingresos presionando el botón +. Si no
        tienes ingresos o quieres ingresarlos después, presiona el botón
        continuar.
      </Text>
      <View style={[defaultStyles.principalFondo, cycleStyles.buttonContainer]}>
        {/* TODO: Validar arrow down */}
        <Svg
          fill="#ffffff"
          height="50px"
          width="50px"
          id="Layer_1"
          viewBox="0 0 476.492 476.492"
        >
          <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
          <G
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></G>
          <G id="SVGRepo_iconCarrier">
            <Polygon points="253.246,339.952 253.246,0 223.246,0 223.246,339.952 101.707,339.952 238.246,476.492 374.785,339.952 "></Polygon>
          </G>
        </Svg>
      </View>
    </>
  );
};

export default NoDataConceptos;

const noDataConceptos = StyleSheet.create({
  informacion: {
    fontSize: 16,
    fontWeight: "300",
  },
});
