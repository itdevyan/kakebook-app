import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import defaultStyles from "@/constants/DefaultStyles";

interface DescripcionLabelProps {
  mostrarDescripcion: boolean;
  setMostrarDescripcion: React.Dispatch<React.SetStateAction<boolean>>;
}

const DescripcionLabel = ({
  mostrarDescripcion,
  setMostrarDescripcion,
}: DescripcionLabelProps) => {
  const [descripcionLabel, setDescripcionLabel] = useState(
    "Agregar descripción"
  );
  const [iconLabel, setIconLabel] = useState("add-circle-outline");
  const [color, setColor] = useState("#4f88c6");

  useEffect(() => {
    if (mostrarDescripcion) {
      setDescripcionLabel("Quitar descripción");
      setIconLabel("close-circle-outline");
      setColor("#fe8f74");
    } else {
      setDescripcionLabel("Agregar descripción");
      setIconLabel("add-circle-outline");
      setColor("#4f88c6");
    }
  }, [mostrarDescripcion]);

  return (
    <TouchableOpacity
      onPress={() => setMostrarDescripcion(!mostrarDescripcion)}
      style={
        (defaultStyles.principalFondo, descripcionStyles.descripcionContainer)
      }
    >
      <Ionicons name={iconLabel} size={18} color={color} />
      <Text
        style={[
          defaultStyles.principalTexto,
          descripcionStyles.descripcionTextLabel,
          { color: color },
        ]}
      >
        {descripcionLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default DescripcionLabel;

const descripcionStyles = StyleSheet.create({
  descripcionContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
  },
  descripcionTextLabel: {
    fontSize: 14,
    color: "#4f88c6",
  },
});
