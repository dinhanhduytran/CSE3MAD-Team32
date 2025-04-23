import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Slot } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = Font.useFonts({
    "PlusJakartaSans-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  // TODO:
  // if not, redirect to the login page
  // if yes, show the main app
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
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
