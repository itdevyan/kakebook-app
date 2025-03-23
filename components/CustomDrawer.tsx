import { View, Text, Platform, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <>
      <View style={customDrawer.headerMenu}>
        <Text style={customDrawer.headerMenuText}>Kakebook</Text>
        <View style={customDrawer.avatar}>
          <Ionicons name={"camera-outline"} size={60} color={"#f6f6f6"} />
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        style={Platform.OS === "ios" && customDrawer.bodyMenuIOS}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={customDrawer.logout}>
        <Ionicons name={"close-circle-outline"} size={18} color={"#fd7453"} />
        <Text style={customDrawer.desconetarText}>Desconectar</Text>
      </View>
      <View
        style={[
          customDrawer.footerMenu,
          Platform.OS === "ios" && customDrawer.footerMenuIOS,
        ]}
      >
        <Text style={customDrawer.footerText}>{`Versión 1.0`}</Text>
      </View>
    </>
  );
};

const customDrawer = StyleSheet.create({
  headerMenu: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    gap: 20,
  },
  avatar: {
    borderWidth: 1,
    borderColor: "#f6f6f6",
    borderRadius: 100,
    padding: 20,
  },
  headerMenuText: {
    color: "#f7fafc",
    fontSize: 25,
    fontWeight: "600",
  },
  bodyMenuIOS: {
    bottom: 50,
  },
  logout: {
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  desconetarText: {
    color: "#fd7453",
    fontSize: 14,
    fontWeight: "600",
  },
  footerMenu: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 15,
    marginRight: 15,
  },
  footerMenuIOS: {
    marginBottom: 30,
    marginRight: 15,
  },
  footerText: {
    color: "#f7fafc",
    fontStyle: "italic",
    fontSize: 12,
  },
});

export default CustomDrawer;
