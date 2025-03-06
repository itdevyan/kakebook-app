import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import HeaderLogin from "@/components/HeaderLogin";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const googleSignUp = () => {
  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View style={googleSignUpStyles.container}>
        <HeaderLogin />
        <View style={googleSignUpStyles.containerRespuesta}>
          <Ionicons name={"logo-google"} size={25} color="white" />
          <TextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            placeholderTextColor={"rgba(255,255,255,0.2)"}
            style={[defaultStyles.principalTexto, googleSignUpStyles.respuesta]}
          />
        </View>

        <Link
          href={"./login"}
          style={[
            defaultStyles.principalBorderButton,
            googleSignUpStyles.button,
          ]}
          asChild
        >
          <TouchableOpacity>
            <Ionicons name={"enter-outline"} size={20} color="white" />

            <Text
              style={[
                defaultStyles.principalTexto,
                googleSignUpStyles.buttonText,
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

const googleSignUpStyles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
  },
  containerRespuesta: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
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
    textAlign: "center",
    fontSize: 15,
    fontWeight: 400,
  },
});

export default googleSignUp;
