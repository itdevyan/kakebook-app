import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import modalComponentsStyles from "@/styles/ModalComponentsStyles";

interface DescripcionInputProps {
  mostrar: boolean;
}

const DescripcionInput = ({ mostrar }: DescripcionInputProps) => {
  if (!mostrar) return null;
  return (
    <View style={modalComponentsStyles.containerInputData}>
      <Text
        style={[
          defaultStyles.principalTexto,
          modalComponentsStyles.containerTitle,
        ]}
      >
        Descripción:
      </Text>
      <View style={modalComponentsStyles.containerInput}>
        <Ionicons
          name={"pencil-outline"}
          size={22}
          color="rgba(255,255,255,0.6)"
          style={{ paddingTop: 5 }}
        />
        <TextInput
          placeholder="Sueldo correspondiente al mes en curso..."
          keyboardType="default"
          multiline
          numberOfLines={10}
          placeholderTextColor={"rgba(255,255,255,0.4)"}
          style={[
            defaultStyles.principalTexto,
            modalComponentsStyles.input,
            descripcionInputStyles.inputMultiLine,
          ]}
        />
      </View>
    </View>
  );
};

export default DescripcionInput;

const descripcionInputStyles = StyleSheet.create({
  inputMultiLine: {
    height: 100,
  },
});
