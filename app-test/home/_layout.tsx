import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function HomeLayout() {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Welcome to Kakebook
      </Text>
      <Slot />
    </View>
  );
}
