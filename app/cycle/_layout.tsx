import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

const _layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="welcome"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="currentSelector"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="initialDateConfig"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="finalDateConfig"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ingresos"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="gastos"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ahorros"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ahorrosConfig"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="resumen"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaView>
  );
};

export default _layout;
