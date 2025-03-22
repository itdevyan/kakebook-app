import { View, Text } from "react-native";
import React from "react";
import defaultStyles from "@/constants/DefaultStyles";

const invitados = () => {
  return (
    <View style={[defaultStyles.principalFondo, { flex: 1, padding: 30 }]}>
      <Text style={[defaultStyles.principalTexto, { textAlign: "center" }]}>
        Proximamente...
      </Text>
    </View>
  );
};

export default invitados;
