import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import welcomeStyles from "@/constants/WelcomeStyles";
import { Link } from "expo-router";

const welcome4 = () => {
  return (
    <View style={[defaultStyles.principalFondo, welcomeStyles.containerNext]}>
      <View style={welcomeStyles.miniTitleContainer}>
        <Text style={[defaultStyles.principalTexto, welcomeStyles.miniTitle]}>
          Kakebook
        </Text>
      </View>
      <Text style={[defaultStyles.principalTexto, welcomeStyles.subTitle]}>
        ¿Qué más?
      </Text>
      {/* Imagen */}
      <View
        style={[
          defaultStyles.principalImagenPredeterminada,
          welcomeStyles.imageContainerNext,
        ]}
      ></View>
      <View style={welcomeStyles.descriptionContainer}>
        <Text style={[defaultStyles.principalTexto, welcomeStyles.description]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis
          lacinia tellus vel euismod. Aenean eget volutpat libero.{" "}
        </Text>
      </View>
      <View
        style={[
          defaultStyles.principalBorder,
          welcomeStyles.nextButtonContainer,
        ]}
      >
        <Link href={"/validation/login"} asChild>
          <TouchableOpacity style={welcomeStyles.nextButton}>
            <Text
              style={[
                defaultStyles.principalTexto,
                welcomeStyles.nextButtonText,
              ]}
            >
              Siguiente
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default welcome4;
