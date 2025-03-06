import { Link } from "expo-router";

import { Button, Text, View } from "react-native";

export default function Page() {
  return (
    <View
      style={{
        marginTop: 50,
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
        }}
      >
        Home
      </Text>
      <View
        style={{
          margin: 50,
        }}
      >
        <Link href="/" asChild>
          <Button title="Back" />
        </Link>
      </View>
    </View>
  );
}
