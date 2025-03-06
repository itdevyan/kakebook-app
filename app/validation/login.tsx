import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import { Link } from "expo-router";
import HeaderLogin from "@/components/HeaderLogin";
import Ionicons from "@expo/vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const login = () => {
  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View style={[defaultStyles.principalFondo, loginStyles.container]}>
        <HeaderLogin />
        <View style={loginStyles.formContainer}>
          <Text style={[defaultStyles.principalTexto, loginStyles.titleForm]}>
            Ingresa tus credenciales
          </Text>
          <View style={loginStyles.containerRespuesta}>
            <Ionicons name={"mail"} size={25} color="white" />
            <TextInput
              placeholder="Correo electrónico"
              keyboardType="email-address"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              style={[defaultStyles.principalTexto, loginStyles.respuesta]}
            />
          </View>
          <View style={loginStyles.containerRespuesta}>
            <Ionicons name={"key-outline"} size={25} color="white" />
            <TextInput
              secureTextEntry
              //TODO: verificar password recomendada
              textContentType={"oneTimeCode"}
              placeholder="Contraseña"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              style={[defaultStyles.principalTexto, loginStyles.respuesta]}
            />
          </View>
          <View style={loginStyles.loginButtonContainer}>
            <Link
              href={"./mailSignUp"}
              style={[loginStyles.buttonRegister]}
              asChild
            >
              <TouchableOpacity>
                <Ionicons name={"clipboard-outline"} size={20} color="#fff" />

                <Text
                  style={[defaultStyles.principalTexto, loginStyles.buttonText]}
                >
                  Registrarse
                </Text>
              </TouchableOpacity>
            </Link>
            <Link
              href={"/cycle/welcome"}
              style={[
                defaultStyles.principalBorderButton,
                loginStyles.buttonLogin,
              ]}
              asChild
            >
              <TouchableOpacity>
                <Ionicons name={"log-in"} size={20} color="#fff" />

                <Text
                  style={[defaultStyles.principalTexto, loginStyles.buttonText]}
                >
                  Ingresar
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Text style={[defaultStyles.principalTexto, loginStyles.titleForm]}>
            O puedes conectarte
          </Text>
        </View>
        <Link
          href={"./withoutSignUp"}
          style={[defaultStyles.principalBorderButton, loginStyles.button]}
          asChild
        >
          <TouchableOpacity>
            <Ionicons name={"mail-open"} size={20} color="#fff" />

            <Text
              style={[defaultStyles.principalTexto, loginStyles.buttonText]}
            >
              Comenzar sin registrarse
            </Text>
          </TouchableOpacity>
        </Link>
        <View style={loginStyles.loginLogoButtonContainer}>
          <Link
            href={"./appleSignUp"}
            style={[
              defaultStyles.principalBorderButton,
              loginStyles.buttonLoginLogo,
            ]}
            asChild
          >
            <TouchableOpacity>
              <Ionicons name={"logo-apple"} size={20} color="#fff" />
            </TouchableOpacity>
          </Link>
          <Link
            href={"./googleSignUp"}
            style={[loginStyles.buttonLoginLogo]}
            asChild
          >
            <TouchableOpacity>
              <Ionicons name={"logo-google"} size={20} color="#fff" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 40,
  },
  formContainer: {
    gap: 20,
    flexDirection: "column",
  },
  loginButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginLogoButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  buttonLogin: {
    backgroundColor: "#163172",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "49%",
  },
  buttonLoginLogo: {
    borderRadius: 100,
    backgroundColor: "#163172",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: 40,
  },
  buttonRegister: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,0.4)",
    backgroundColor: "rgba(0,0,0,0,0.1)",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "49%",
  },
  button: {
    backgroundColor: "#163172",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingLeft: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 400,
  },
  titleForm: {
    fontSize: 20,
  },
  containerRespuesta: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    width: "100%",
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  respuesta: {
    fontSize: 16,
    width: "90%",
  },
});

export default login;
