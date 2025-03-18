import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#163172",
        },
      }}
    >
      <Stack.Screen
        name="ingresos"
        options={{
          title: "Nuevo ingreso",
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="gastos"
        options={{
          title: "Nuevo gasto",
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
};

export default _layout;
