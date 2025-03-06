import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import defaultStyles from "@/constants/DefaultStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import HeaderLogoMini from "@/components/HeaderLogoMini";
import BotonContinuar from "@/components/BotonContinuar";
import DatePicker from "react-native-date-picker";
import { es } from "date-fns/locale/es";
import { format, addDays, lastDayOfMonth } from "date-fns";
import { useLocalSearchParams } from "expo-router";

const locale = es;

const finalDateConfig = () => {
  const { fechaInicial } = useLocalSearchParams<{ fechaInicial: string }>();
  const [fechaInicialParam, _] = useState(new Date(fechaInicial));
  const [fechaFinal, setFechaFinal] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [activeButton, setActiveButton] = useState([false, true, false]);

  const add30Days = () => {
    const finalDateWith30Days = addDays(fechaInicialParam, 30);
    setFechaFinal(finalDateWith30Days);
    setActiveButton([true, false, false]);
  };

  const setLastDayOfMonth = () => {
    setFechaFinal(lastDayOfMonth(addDays(fechaInicialParam, 1)));
    setActiveButton([false, true, false]);
  };

  const handleCalendar = () => {
    setMostrarCalendario(true);
    setActiveButton([false, false, true]);
  };

  useEffect(() => {
    setLastDayOfMonth();
  }, []);

  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View
        style={[defaultStyles.principalFondo, finalDateConfigStyles.container]}
      >
        <HeaderLogoMini />
        <Text style={[defaultStyles.principalTexto]}>
          Perfecto, ahora configuremos hasta cuando finalizará tu ciclo
        </Text>
        <Text
          style={[defaultStyles.principalTexto, finalDateConfigStyles.title]}
        >
          ¿Cuándo termina tu mes?
        </Text>
        <DatePicker
          modal
          date={fechaFinal}
          locale="es-ES"
          mode="date"
          onConfirm={(date) => {
            // TODO: No puede setear una fecha anterior a la fecha inicial
            setMostrarCalendario(false);
            setFechaFinal(date);
          }}
          onCancel={() => {
            setMostrarCalendario(false);
          }}
          open={mostrarCalendario}
          theme="dark"
        />
        <View style={[finalDateConfigStyles.buttonContainer]}>
          <TouchableOpacity
            style={[
              finalDateConfigStyles.button,
              activeButton[0]
                ? finalDateConfigStyles.buttonBoxActive
                : finalDateConfigStyles.buttonBoxInactive,
            ]}
            onPress={add30Days}
          >
            <Text
              style={[
                finalDateConfigStyles.buttonText,
                activeButton[0]
                  ? finalDateConfigStyles.buttonActive
                  : finalDateConfigStyles.buttonInactive,
              ]}
            >
              En 30 días más
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              finalDateConfigStyles.button,
              activeButton[1]
                ? finalDateConfigStyles.buttonBoxActive
                : finalDateConfigStyles.buttonBoxInactive,
            ]}
            onPress={setLastDayOfMonth}
          >
            <Text
              style={[
                finalDateConfigStyles.buttonText,
                activeButton[1]
                  ? finalDateConfigStyles.buttonActive
                  : finalDateConfigStyles.buttonInactive,
              ]}
            >
              Hasta fin de mes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              finalDateConfigStyles.button,
              activeButton[2]
                ? finalDateConfigStyles.buttonBoxActive
                : finalDateConfigStyles.buttonBoxInactive,
            ]}
            onPress={handleCalendar}
          >
            <Text
              style={[
                finalDateConfigStyles.buttonText,
                activeButton[2]
                  ? finalDateConfigStyles.buttonActive
                  : finalDateConfigStyles.buttonInactive,
              ]}
            >
              Prefiero configurar yo
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[defaultStyles.principalFondo, finalDateConfigStyles.resumen]}
        >
          <Text style={[defaultStyles.principalTexto]}>
            Tu ciclo comenzará el:
          </Text>
          <Text
            style={[
              defaultStyles.principalTexto,
              finalDateConfigStyles.dateText,
            ]}
          >
            {/* TODO: quitar el addDays y que la fecha venga bien desde el parametro */}
            {format(addDays(fechaInicialParam, 1), "EEEE, dd MMMM yyyy", {
              locale,
            })}
          </Text>
          <Text style={[defaultStyles.principalTexto]}>y terminará el:</Text>
          <Text
            style={[
              defaultStyles.principalTexto,
              finalDateConfigStyles.dateText,
            ]}
          >
            {format(fechaFinal, "EEEE, dd MMMM yyyy", { locale })}
          </Text>
        </View>
        <BotonContinuar url="./ingresos" />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default finalDateConfig;

const finalDateConfigStyles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    marginBottom: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  buttonText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 16,
    fontWeight: 600,
  },
  buttonBoxActive: {
    borderColor: "#fff",
  },
  buttonBoxInactive: {
    borderColor: "rgba(255,255,255,0.5)",
  },
  buttonActive: {
    color: "#fff",
  },
  buttonInactive: {
    color: "rgba(255,255,255,0.5)",
  },
  resumen: {
    alignItems: "center",
    gap: 10,
    marginBottom: 30,
  },
  dateText: {
    fontSize: 22,
    fontWeight: 600,
  },
});
