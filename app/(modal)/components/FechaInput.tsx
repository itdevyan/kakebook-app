import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-date-picker";
import modalComponentsStyles from "@/styles/ModalComponentsStyles";
import defaultStyles from "@/constants/DefaultStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";

const locale = es;

const FechaInput = () => {
  const [fecha, setFecha] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  return (
    <>
      <DatePicker
        modal
        date={fecha}
        locale="es-ES"
        mode="date"
        onConfirm={(date) => {
          // TODO: No puede setear una fecha anterior a la fecha inicial
          setMostrarCalendario(false);
          setFecha(date);
        }}
        onCancel={() => {
          setMostrarCalendario(false);
        }}
        open={mostrarCalendario}
        theme="dark"
      />
      <View style={modalComponentsStyles.containerInputData}>
        <Text
          style={[
            defaultStyles.principalTexto,
            modalComponentsStyles.containerTitle,
          ]}
        >
          Fecha:
        </Text>
        <View style={modalComponentsStyles.containerInput}>
          <Ionicons
            name={"calendar-outline"}
            size={25}
            color="rgba(255,255,255,0.6)"
          />
          <TouchableOpacity
            onPress={() => setMostrarCalendario(true)}
            style={[fechaInputStyles.calendarButtonInput]}
          >
            <Text
              style={[
                defaultStyles.principalTexto,
                modalComponentsStyles.input,
              ]}
            >
              {format(fecha, "EEEE, dd MMMM yyyy", { locale })}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FechaInput;

const fechaInputStyles = StyleSheet.create({
  calendarButtonInput: {
    width: "100%",
    justifyContent: "center",
  },
});
