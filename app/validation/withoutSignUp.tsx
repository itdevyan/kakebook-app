import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import HeaderLogin from "@/components/HeaderLogin";
import Ionicons from "@expo/vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Link } from "expo-router";

const withoutSignUp = () => {
  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View style={withoutSignUpStyles.container}>
        <HeaderLogin />
        <Text
          style={[defaultStyles.principalTexto, withoutSignUpStyles.pregunta]}
        >
          ¿Cómo quieres que te digamos?
        </Text>
        <View style={withoutSignUpStyles.containerRespuesta}>
          <Ionicons name={"at-circle-outline"} size={25} color="white" />
          <TextInput
            style={[
              defaultStyles.principalTexto,
              withoutSignUpStyles.respuesta,
            ]}
          />
        </View>

        <Text
          style={[
            defaultStyles.principalTexto,
            withoutSignUpStyles.descripcion,
          ]}
        >
          Puedes vincular esta cuenta registrándote con las opciones disponibles
          que tenemos para ti.
        </Text>
        <Link
          href={"/(menu)/(tabs)"}
          replace
          style={[
            defaultStyles.principalBorderButton,
            withoutSignUpStyles.button,
          ]}
          asChild
        >
          <TouchableOpacity>
            <Ionicons name={"enter-outline"} size={20} color="white" />

            <Text
              style={[
                defaultStyles.principalTexto,
                withoutSignUpStyles.buttonText,
              ]}
            >
              Ingresar
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </KeyboardAwareScrollView>
  );
};

const withoutSignUpStyles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
  },

  pregunta: {
    fontSize: 14,
    textAlign: "center",
  },
  descripcion: {
    fontSize: 12,
    textAlign: "center",
    paddingTop: 20,
  },
  containerRespuesta: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    alignSelf: "center",
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  respuesta: {
    fontSize: 16,
    width: "90%",
  },

  button: {
    backgroundColor: "#163172",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    fontWeight: 400,
  },
});

export default withoutSignUp;
