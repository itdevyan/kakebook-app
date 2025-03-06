import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="privacy-policy"
        options={{ title: "Privacy Policy", headerShown: false }}
      />
      <Tabs.Screen
        name="terms-of-service"
        options={{ title: "Terms of Service", headerShown: false }}
      />
    </Tabs>
  );
}
