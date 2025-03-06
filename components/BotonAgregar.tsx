import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";

interface BotonAgregarProps {
  title: string;
  callback: () => void;
}

const BotonAgregar = ({ title, callback }: BotonAgregarProps) => {
  const handleAction = () => {
    callback();
  };

  return (
    <TouchableOpacity
      onPress={handleAction}
      style={[defaultStyles.principalBorderButton, botonAgregarStyles.button]}
    >
      <Text
        style={[defaultStyles.principalTexto, botonAgregarStyles.buttonText]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BotonAgregar;

const botonAgregarStyles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "#163172",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 400,
  },
});
