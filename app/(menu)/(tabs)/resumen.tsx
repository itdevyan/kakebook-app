import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Ionicons } from "@expo/vector-icons";

const resumen = () => {
  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View style={[defaultStyles.principalFondo, resumenStyle.container]}>
        <View style={resumenStyle.saldoContainer}>
          <Text style={[defaultStyles.principalTexto, resumenStyle.title]}>
            Saldo
          </Text>
          <Text style={[defaultStyles.principalTexto, resumenStyle.saldo]}>
            $ 4.562.000
          </Text>
        </View>
        <View
          style={[
            resumenStyle.cardContainer,
            resumenStyle.diasRestantesContainer,
          ]}
        >
          <Text
            style={[
              defaultStyles.principalTexto,
              resumenStyle.diasRestantesTitle,
            ]}
          >
            Días restantes para próximo ciclo
          </Text>
          <Text
            style={[
              defaultStyles.principalTexto,
              resumenStyle.diasRestantesText,
            ]}
          >
            29
          </Text>
        </View>
        <View style={[resumenStyle.cardContainer, resumenStyle.cicloContainer]}>
          <View style={resumenStyle.cicloTextContainer}>
            <Text
              style={[defaultStyles.principalTexto, resumenStyle.cicloTitle]}
            >
              Ciclo
            </Text>
            <Text
              style={[
                defaultStyles.principalTexto,
                resumenStyle.cicloTitleDate,
              ]}
            >
              30/07/23 - 29/08/23
            </Text>
          </View>
          <Text
            style={[
              defaultStyles.principalTexto,
              resumenStyle.diasRestantesText,
            ]}
          >
            <Ionicons name={"repeat-outline"} size={55} color="#edeff4" />
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const resumenStyle = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
  },
  saldoContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  saldo: {
    fontSize: 40,
    textAlign: "center",
  },
  diasRestantesContainer: {
    backgroundColor: "#275b88",
  },
  cicloContainer: {
    backgroundColor: "#574786",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f6f6f6",
    borderRadius: 10,
    width: "100%",
    height: 80,
  },
  diasRestantesTitle: {
    fontSize: 18,
    textAlign: "left",
    fontWeight: "600",
    width: "70%",
    paddingLeft: 30,
  },
  diasRestantesText: {
    fontSize: 40,
    fontWeight: "600",
    width: "30%",
    textAlign: "center",
  },
  diasRestantesTextIcon: {
    width: "30%",
  },
  cicloTextContainer: {
    flexDirection: "column",
    width: "70%",
  },
  cicloTitle: {
    fontSize: 18,
    textAlign: "left",
    fontWeight: "600",
    width: "70%",
    paddingLeft: 30,
  },
  cicloTitleDate: {
    fontSize: 16,
    paddingLeft: 30,
  },
});
export default resumen;
