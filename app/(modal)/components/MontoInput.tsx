import { View, Text, TextInput } from "react-native";
import React from "react";
import modalComponentsStyles from "@/styles/ModalComponentsStyles";
import defaultStyles from "@/constants/DefaultStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

const MontoInput = () => {
  return (
    <View style={modalComponentsStyles.containerInputData}>
      <Text
        style={[
          defaultStyles.principalTexto,
          modalComponentsStyles.containerTitle,
        ]}
      >
        Monto:
      </Text>
      <View style={modalComponentsStyles.containerInput}>
        <Ionicons
          name={"cash-outline"}
          size={25}
          color="rgba(255,255,255,0.6)"
        />
        <TextInput
          placeholder="$ 100.000"
          keyboardType="decimal-pad"
          placeholderTextColor={"rgba(255,255,255,0.4)"}
          style={[defaultStyles.principalTexto, modalComponentsStyles.input]}
        />
      </View>
    </View>
  );
};

export default MontoInput;
