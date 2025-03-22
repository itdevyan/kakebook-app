import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <KeyboardProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="cycle" />
        <Stack.Screen name="introduction" />
        <Stack.Screen name="validation" />
        <Stack.Screen
          name="(modal)"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </KeyboardProvider>
  );
};

export default _layout;
