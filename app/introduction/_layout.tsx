import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome1" />
      <Stack.Screen name="welcome2" />
      <Stack.Screen name="welcome3" />
      <Stack.Screen name="welcome4" />
    </Stack>
  );
}
