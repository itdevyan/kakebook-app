import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import modalComponentsStyles from "@/styles/ModalComponentsStyles";

const ConceptoInput = () => {
  return (
    <View style={modalComponentsStyles.containerInputData}>
      <Text
        style={[
          defaultStyles.principalTexto,
          modalComponentsStyles.containerTitle,
        ]}
      >
        Concepto:
      </Text>
      <View style={modalComponentsStyles.containerInput}>
        <Ionicons
          name={"library-outline"}
          size={25}
          color="rgba(255,255,255,0.6)"
        />
        <TextInput
          placeholder="Sueldo"
          keyboardType="default"
          placeholderTextColor={"rgba(255,255,255,0.4)"}
          style={[defaultStyles.principalTexto, modalComponentsStyles.input]}
        />
      </View>
    </View>
  );
};

export default ConceptoInput;
