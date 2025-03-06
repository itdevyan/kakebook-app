import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import React, { useState } from "react";
import defaultStyles from "@/constants/DefaultStyles";
import HeaderLogoMini from "@/components/HeaderLogoMini";
import BotonContinuar from "@/components/BotonContinuar";

const currentSelector = () => {
  const [activeButton, setActiveButton] = useState([false, false, false]);

  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View
        style={[defaultStyles.principalFondo, currentSelectorStyles.container]}
      >
        <HeaderLogoMini />
        <View>
          <Text
            style={[defaultStyles.principalTexto, currentSelectorStyles.title]}
          >
            ¿Qué moneda utilizas?
          </Text>
        </View>
        <View style={[currentSelectorStyles.buttonContainer]}>
          <TouchableOpacity
            onPress={() => setActiveButton([true, false, false])}
          >
            <Text
              style={[
                defaultStyles.principalTexto,
                currentSelectorStyles.button,
                activeButton[0]
                  ? currentSelectorStyles.buttonActive
                  : currentSelectorStyles.buttonInactive,
              ]}
            >
              $
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveButton([false, true, false])}
          >
            <Text
              style={[
                defaultStyles.principalTexto,
                currentSelectorStyles.button,
                activeButton[1]
                  ? currentSelectorStyles.buttonActive
                  : currentSelectorStyles.buttonInactive,
              ]}
            >
              US$
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveButton([false, false, true])}
          >
            <Text
              style={[
                defaultStyles.principalTexto,
                currentSelectorStyles.button,
                activeButton[2]
                  ? currentSelectorStyles.buttonActive
                  : currentSelectorStyles.buttonInactive,
              ]}
            >
              €
            </Text>
          </TouchableOpacity>
        </View>
        <BotonContinuar url="./initialDateConfig" />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default currentSelector;

const currentSelectorStyles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
  },
  title: {
    marginTop: 30,
    fontSize: 28,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
    gap: 20,
  },
  button: {
    textAlign: "center",
    width: 90,
    paddingVertical: 50,
    fontSize: 28,
    fontWeight: 600,
    borderRadius: 20,
    borderWidth: 1,
  },
  buttonActive: {
    color: "#fff",
    borderColor: "#fff",
  },
  buttonInactive: {
    color: "rgba(255,255,255,0.5)",
    borderColor: "rgba(255,255,255,0.5)",
  },
});
