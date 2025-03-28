import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4f88c6",
        tabBarActiveBackgroundColor: "#191a21",
        tabBarInactiveBackgroundColor: "#040405",
      }}
    >
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menú",
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name={"cog-outline"} size={28} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.openDrawer();
          },
        })}
      />
      <Tabs.Screen
        name="resumen"
        options={{
          headerTitle: "",
          title: "Resumen",
          headerTitleStyle: {
            color: "#fff",
          },

          headerStyle: {
            backgroundColor: "#040405",
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name={"home-outline"} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name={"duplicate-outline"} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ingresos"
        options={{
          title: "Ingresos",
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name={"arrow-up-outline"} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gastos"
        options={{
          title: "Gastos",
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name={"arrow-down-outline"} size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
