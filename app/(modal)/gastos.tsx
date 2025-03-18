import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import defaultStyles from "@/constants/DefaultStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import BotonAgregar from "@/components/BotonAgregar";
import ConceptoInput from "./components/ConceptoInput";
import DescripcionLabel from "./components/DescripcionLabel";
import DescripcionInput from "./components/DescripcionInput";
import FechaInput from "./components/FechaInput";
import MontoInput from "./components/MontoInput";

const gastos = () => {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const handleAgregar = () => {
    console.log("Agregando ingreso...");
  };

  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View style={[defaultStyles.principalFondo, gastosStyles.container]}>
        <ConceptoInput />
        <DescripcionLabel
          mostrarDescripcion={mostrarDescripcion}
          setMostrarDescripcion={setMostrarDescripcion}
        />
        <DescripcionInput mostrar={mostrarDescripcion} />
        <FechaInput />
        <MontoInput />
        <BotonAgregar title="Agregar" callback={handleAgregar} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default gastos;

const gastosStyles = StyleSheet.create({
  container: {
    paddingTop: 40,
    gap: 20,
    paddingHorizontal: 40,
  },
});
