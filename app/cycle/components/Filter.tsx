import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TIPO_CONCEPTO } from "@/constants/TipoConceptoEnum";

interface FilterProps {
  tipoConcepto: TIPO_CONCEPTO;
}

const Filter = ({ tipoConcepto }: FilterProps) => {
  return (
    <View style={filterStyles.containerInput}>
      <Ionicons
        name={"search-outline"}
        size={25}
        color="rgba(255,255,255,0.6)"
      />
      <TextInput
        placeholder={`Buscar un ${
          tipoConcepto === TIPO_CONCEPTO.GASTOS ? "gastos" : "ingresoss"
        }...`}
        keyboardType="default"
        placeholderTextColor={"rgba(255,255,255,0.4)"}
        style={[defaultStyles.principalTexto, filterStyles.input]}
      />
    </View>
  );
};

export default Filter;

const filterStyles = StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    width: "100%",
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  input: {
    fontSize: 16,
    width: "90%",
  },
});
