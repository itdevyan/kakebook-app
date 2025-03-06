import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
  const goImperativeNavigation = () => {
    router.replace("/settings/apple/orange/potatoes");
  };

  return (
    <View>
      <Text>Top-level page</Text>
      <Link href="/settings/katsuyan/123/a124e23b3a" asChild>
        <Button title="Go settings others" />
      </Link>
      <Link href="/blog/katsuyan" asChild>
        <Button title="Go blog katsuyan" />
      </Link>
      <Link
        href={{
          pathname: "./settings/[id]",
          params: { id: "bacon" },
        }}
        asChild
      >
        <Button title="Go settings with internal parameter" />
      </Link>
      <Link push href="/blog/jenn" asChild>
        <Button title="Go blog jenn with push navigation" />
      </Link>
      <Link replace href="/blog/Julie" asChild>
        <Button title="Go blog julie with replace navigation" />
      </Link>

      <Button
        onPress={goImperativeNavigation}
        title="Go to settings with imperative navigations"
      />

      <Link href="./home" asChild>
        <Button title="Go to home" />
      </Link>
      <Link href="./home/config" asChild>
        <Button title="Go to config home" />
      </Link>

      <Link href="./group" asChild>
        <Button title="Go to group section" />
      </Link>
    </View>
  );
}
