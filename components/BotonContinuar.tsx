import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { ExternalPathString, Link, RelativePathString } from "expo-router";
import defaultStyles from "@/constants/DefaultStyles";
import { reload } from "expo-router/build/global-state/routing";

interface BotonContinuarProps {
  url: RelativePathString | ExternalPathString | any; //TODO: quitar el any
  title?: string;
  replace?: any;
}

const BotonContinuar = ({
  url,
  title = "Continuar",
  replace = false,
}: BotonContinuarProps) => {
  return (
    <Link
      href={url}
      replace={replace}
      style={[defaultStyles.principalBorderButton, botonContinuarStyles.button]}
      asChild
    >
      <TouchableOpacity>
        <Text
          style={[
            defaultStyles.principalTexto,
            botonContinuarStyles.buttonText,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default BotonContinuar;

const botonContinuarStyles = StyleSheet.create({
  button: {
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
