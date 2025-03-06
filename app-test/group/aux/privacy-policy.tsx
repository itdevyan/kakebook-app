import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function privacyPolicy() {
  const goBack = () => {
    router.replace("/group");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>privacy-policy</Text>
      <Button onPress={goBack} title="Go Back" />
    </View>
  );
}
