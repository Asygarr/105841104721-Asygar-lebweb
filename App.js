import React from "react";
import AppNavigation from "./navigation/AppNavigation";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    MetroBlack: require("./assets/fonts/Metropolis-Black.otf"),
    MetroBold: require("./assets/fonts/Metropolis-Bold.otf"),
    MetroLight: require("./assets/fonts/Metropolis-Light.otf"),
    MetroSemiBold: require("./assets/fonts/Metropolis-SemiBold.otf"),
    MetroMedium: require("./assets/fonts/Metropolis-Medium.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <AppNavigation />;
}
