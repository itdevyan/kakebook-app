import { Link, useLocalSearchParams } from "expo-router";

import { Button, FlatList, Text, View } from "react-native";

export default function Page() {
  const { item } = useLocalSearchParams();

  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={item}
        renderItem={(texto) => (
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {texto.item}
          </Text>
        )}
      />
      <Link href="/" asChild>
        <Button title="Back" />
      </Link>
    </View>
  );
}
