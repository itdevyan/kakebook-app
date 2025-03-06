import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const mailSignUp = () => {
  return (
    <KeyboardAwareScrollView
      bottomOffset={50}
      style={[defaultStyles.principalFondo]}
      contentContainerStyle={[defaultStyles.principalFondo]}
    >
      <View style={[defaultStyles.principalFondo, mailSignUpStyles.container]}>
        {/* Header */}
        <View>
          <Text style={[defaultStyles.principalTexto, mailSignUpStyles.title]}>
            Kakebook
          </Text>
          <View
            style={[
              defaultStyles.principalImagenPredeterminada,
              mailSignUpStyles.imageContainer,
            ]}
          >
            <Ionicons
              name={"book-outline"}
              size={70}
              color="#fff"
              style={mailSignUpStyles.logo}
            />
          </View>
        </View>
        {/* Formulario */}
        <View style={mailSignUpStyles.formContainer}>
          <Text
            style={[defaultStyles.principalTexto, mailSignUpStyles.titleForm]}
          >
            Ingresa tus datos
          </Text>
          <View style={mailSignUpStyles.containerRespuesta}>
            <Ionicons name={"at"} size={25} color="white" />
            <TextInput
              placeholder="Nombre"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              style={[defaultStyles.principalTexto, mailSignUpStyles.respuesta]}
            />
          </View>
          <View style={mailSignUpStyles.containerRespuesta}>
            <Ionicons name={"mail"} size={25} color="white" />
            <TextInput
              placeholder="Correo electrónico"
              keyboardType="email-address"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              style={[defaultStyles.principalTexto, mailSignUpStyles.respuesta]}
            />
          </View>
          <View style={mailSignUpStyles.containerRespuesta}>
            <Ionicons name={"calendar"} size={25} color="white" />
            <TextInput
              readOnly
              placeholder="01/01/1990"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              style={[defaultStyles.principalTexto, mailSignUpStyles.respuesta]}
            />
          </View>
          <Text
            style={[defaultStyles.principalTexto, mailSignUpStyles.titleForm]}
          >
            Seguridad
          </Text>
          <View style={mailSignUpStyles.containerRespuesta}>
            <Ionicons name={"key-outline"} size={25} color="white" />
            <TextInput
              secureTextEntry
              //TODO: verificar password recomendada
              textContentType={"oneTimeCode"}
              placeholder="Contraseña"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              style={[defaultStyles.principalTexto, mailSignUpStyles.respuesta]}
            />
          </View>
          <View style={mailSignUpStyles.containerRespuesta}>
            <Ionicons name={"key-outline"} size={25} color="white" />
            <TextInput
              secureTextEntry
              //TODO: verificar password recomendada
              textContentType={"oneTimeCode"}
              placeholder="Repite contraseña"
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              style={[defaultStyles.principalTexto, mailSignUpStyles.respuesta]}
            />
          </View>
          <Link
            href={"./login"}
            style={[
              defaultStyles.principalBorderButton,
              mailSignUpStyles.button,
            ]}
            asChild
          >
            <TouchableOpacity>
              <Ionicons name={"enter-outline"} size={20} color="white" />

              <Text
                style={[
                  defaultStyles.principalTexto,
                  mailSignUpStyles.buttonText,
                ]}
              >
                Ingresar
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mailSignUpStyles = StyleSheet.create({
  container: {
    gap: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 500,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    justifyContent: "center",
    borderRadius: 100,
    opacity: 0.8,
    alignSelf: "center",
    marginBottom: 30,
    backgroundColor: "#4d80e4",
  },
  formContainer: {
    gap: 20,
    flexDirection: "column",
    paddingHorizontal: 40,
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
  logo: {
    alignSelf: "center",
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

export default mailSignUp;
