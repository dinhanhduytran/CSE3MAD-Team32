import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found" }} />
      <Link href="/home" style={styles.button}>
        Go back to Home Screen
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    color: "#000",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "blue",
  },
});
