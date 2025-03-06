import { Button, Text, View } from "react-native";
import React, { Component } from "react";
import { Link } from "expo-router";

export default class config extends Component {
  render() {
    return (
      <View>
        <Text>config</Text>
        <Link href={"/"} asChild>
          <Button title="Go back" />
        </Link>
      </View>
    );
  }
}
