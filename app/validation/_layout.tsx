import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import defaultStyles from "@/constants/DefaultStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function validationLayout() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="withoutSignUp"
          options={{
            title: "Comenzar sin registrarse",
            headerTitleStyle: [
              defaultStyles.principalTexto,
              layoutStyles.title,
            ],
            headerStyle: defaultStyles.principalFondo,
            headerTintColor: "#fff",
            headerLeft: () => (
              <TouchableOpacity onPress={handleBack}>
                <Ionicons name={"arrow-back"} size={25} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="appleSignUp"
          options={{
            title: "Conectar con Apple ID",
            headerTitleStyle: [
              defaultStyles.principalTexto,
              layoutStyles.title,
            ],
            headerStyle: defaultStyles.principalFondo,
            headerTintColor: "#fff",
            headerLeft: () => (
              <TouchableOpacity onPress={handleBack}>
                <Ionicons name={"arrow-back"} size={25} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="googleSignUp"
          options={{
            title: "Conectar con Google Account",
            headerTitleStyle: [
              defaultStyles.principalTexto,
              layoutStyles.title,
            ],
            headerStyle: defaultStyles.principalFondo,
            headerTintColor: "#fff",
            headerLeft: () => (
              <TouchableOpacity onPress={handleBack}>
                <Ionicons name={"arrow-back"} size={25} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="mailSignUp"
          options={{
            title: "Conectar con tu correo",
            headerTitleStyle: [
              defaultStyles.principalTexto,
              layoutStyles.title,
            ],
            headerStyle: defaultStyles.principalFondo,
            headerTintColor: "#fff",
            headerLeft: () => (
              <TouchableOpacity onPress={handleBack}>
                <Ionicons name={"arrow-back"} size={25} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}

const layoutStyles = StyleSheet.create({
  title: {
    fontSize: 12,
  },
});
