import React from "react";
import AppNavigation from "./navigation/AppNavigation";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import LoginSimak from "./code/LoginSimak";
import Api from "./code/Api";
import UseState from "./code/UseState";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    MetroBlack: require("./assets/fonts/Metropolis-Black.otf"),
    MetroBold: require("./assets/fonts/Metropolis-Bold.otf"),
    MetroLight: require("./assets/fonts/Metropolis-Light.otf"),
    MetroSemiBold: require("./assets/fonts/Metropolis-SemiBold.otf"),
    MetroMedium: require("./assets/fonts/Metropolis-Medium.otf"),
  });

  if (!fontsLoaded) {
    // return <AppLoading />;
    return <Text>Loading...</Text>;
  }

  // return <AppNavigation />;
  // return <UseState />
  return <LoginSimak />;
  // return <Text>App</Text>;
  // return <Api />;
}
