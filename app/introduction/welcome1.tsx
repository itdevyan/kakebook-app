import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import defaultStyles from "@/constants/DefaultStyles";

const welcome1 = () => {
  return (
    <View style={[defaultStyles.principalFondo, styleView.container]}>
      <Text style={[defaultStyles.principalTexto, styleView.title]}>
        Kakebook
      </Text>
      {/* Imagen */}
      <View
        style={[
          defaultStyles.principalImagenPredeterminada,
          styleView.imageContainer,
        ]}
      ></View>
      <View style={[defaultStyles.principalBorder, styleView.nextButton]}>
        <Link href={"/introduction/welcome2"} asChild>
          <TouchableOpacity>
            <Text
              style={[defaultStyles.principalTexto, styleView.nextButtonText]}
            >
              Siguiente
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styleView = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 80,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
  },
  imageContainer: {
    justifyContent: "center",
    alignSelf: "center",
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  nextButtonContainer: {
    justifyContent: "center",
  },
  nextButton: {
    paddingVertical: 15,
    marginHorizontal: 100,
  },
  nextButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 500,
  },
});

export default welcome1;
