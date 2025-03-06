import { View, Text, Button } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function index() {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Link href="./group/about" asChild>
        <Button title="Go to about" />
      </Link>
      <Link href="./group/user" asChild>
        <Button title="Go to user" />
      </Link>
      <Link href="./group/aux" asChild>
        <Button title="Go to aux" />
      </Link>
    </View>
  );
}
