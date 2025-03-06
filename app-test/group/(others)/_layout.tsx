import { View, Text, Button } from "react-native";
import { router, Slot } from "expo-router";
import React from "react";

export default function appLayout() {
  const goBack = () => {
    router.back();
  };

  return (
    <View
      style={
        {
          // alignItems: "center",
        }
      }
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Group section
      </Text>
      <Slot />
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Button onPress={goBack} title="Go Back" />
      </View>
    </View>
  );
}
