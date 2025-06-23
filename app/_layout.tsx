import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import './global.css'

export default function RootLayout() {
  return (
    <SafeAreaProvider className="bg-white">
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}