import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import React, { useState } from "react";
import defaultStyles from "@/constants/DefaultStyles";
import HeaderLogoMini from "@/components/HeaderLogoMini";
import BotonContinuar from "@/components/BotonContinuar";
import DatePicker from "react-native-date-picker";
import { format } from "date-fns";

var fechaHoy = new Date();

const initialDateConfig = () => {
  const [fecha, setFecha] = useState(
    new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(), 1)
  );

  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View
        style={[
          defaultStyles.principalFondo,
          initialDateConfigStyles.container,
        ]}
      >
        <HeaderLogoMini />
        <View>
          <Text
            style={[
              defaultStyles.principalTexto,
              initialDateConfigStyles.title,
            ]}
          >
            ¿Cuándo comienza tu mes?
          </Text>
        </View>
        <DatePicker
          date={fecha}
          locale="es-ES"
          mode="date"
          theme="dark"
          onDateChange={setFecha}
        />
        <BotonContinuar
          url={`./finalDateConfig?fechaInicial=${format(fecha, "yyyy-MM-dd")}`}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default initialDateConfig;

const initialDateConfigStyles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
  },
  title: {
    marginTop: 30,
    fontSize: 26,
    textAlign: "center",
  },
});
