import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import defaultStyles from "@/constants/DefaultStyles";
import HeaderLogoMini from "@/components/HeaderLogoMini";
import Slider from "@react-native-community/slider";
import modalComponentsStyles from "@/styles/ModalComponentsStyles";
import BotonContinuar from "@/components/BotonContinuar";

const ahorrosConfig = () => {
  const [montoAhorro, setMontoAhorro] = useState(100000);
  const [proporcionalSemanal, setProporcionalSemanal] = useState(false);
  const [notificacionAhorro, setNotificacionAhorro] = useState(false);

  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View
        style={[defaultStyles.principalFondo, ahorrosConfigStyles.container]}
      >
        <HeaderLogoMini />
        <Text style={[defaultStyles.principalTexto, ahorrosConfigStyles.title]}>
          Ahorros
        </Text>
        <Text style={defaultStyles.principalTexto}>
          Para ayudarte mejor, selecciona las opciones que más encajen contigo.
        </Text>
        <Text style={defaultStyles.principalTexto}>
          Mi intención es ahorrar esta cantidad para este mes:
        </Text>
        <Text
          style={[
            defaultStyles.principalTexto,
            ahorrosConfigStyles.montoAhorroText,
          ]}
        >
          {/* TODO: formatear monto */}
          {montoAhorro}
        </Text>
        <Slider
          onValueChange={setMontoAhorro}
          value={montoAhorro}
          style={{ width: "100%", height: 50 }}
          step={10000}
          minimumValue={0}
          maximumValue={1000000}
          minimumTrackTintColor="#163172"
          maximumTrackTintColor="rgba(255,255,255,0.5)"
        />
        <View style={ahorrosConfigStyles.optionContainer}>
          <Text
            style={[
              defaultStyles.principalTexto,
              ahorrosConfigStyles.optionText,
            ]}
          >
            Quiero que el monto sea proporcional por semana:
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={proporcionalSemanal ? "#1e56a0" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setProporcionalSemanal}
            value={proporcionalSemanal}
          />
        </View>
        <View style={ahorrosConfigStyles.optionContainer}>
          <Text
            style={[
              defaultStyles.principalTexto,
              ahorrosConfigStyles.optionText,
            ]}
          >
            Quiero que me recuerde ahorrar con una notificación:
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={notificacionAhorro ? "#1e56a0" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setNotificacionAhorro}
            value={notificacionAhorro}
          />
        </View>
        <Text
          style={[
            defaultStyles.principalTexto,
            ahorrosConfigStyles.motivoTitle,
          ]}
        >
          ¿Qué te motiva a ahorrar?
        </Text>
        <View style={modalComponentsStyles.containerInput}>
          <TextInput
            placeholder="Quiero viajar a Japón el próximo año..."
            keyboardType="default"
            multiline
            numberOfLines={10}
            placeholderTextColor={"rgba(255,255,255,0.4)"}
            style={[
              defaultStyles.principalTexto,
              modalComponentsStyles.input,
              ahorrosConfigStyles.inputMultiLine,
            ]}
          />
        </View>
        <BotonContinuar url={"./ahorrosConfig"} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const ahorrosConfigStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: "600",
  },
  montoAhorroText: {
    fontSize: 22,
    fontWeight: 600,
    textAlign: "center",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionText: {
    width: "80%",
  },
  motivoTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 600,
  },
  inputMultiLine: {
    height: 100,
  },
});

export default ahorrosConfig;
