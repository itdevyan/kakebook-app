import { Link, useLocalSearchParams } from "expo-router";

import { Button, Text, View } from "react-native";

export default function Page() {
  const { multiple } = useLocalSearchParams();

  return (
    <View>
      <Text>Blog post: {multiple}</Text>
      <Link href="/" asChild>
        <Button title="Back" />
      </Link>
    </View>
  );
}
