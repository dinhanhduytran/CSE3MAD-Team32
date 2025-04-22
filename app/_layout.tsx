import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  // check if the user is logged in
  // if not, redirect to the login page
  // if yes, show the main app
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: true, headerTitle: "Root" }}>
        <Stack.Screen name="(tabs)" />
        {/* <Stack.Screen name="(auth)" /> */}
        <Stack.Screen
          name="+not-found"
          options={{ title: "Oops! Not found" }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
