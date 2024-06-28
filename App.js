import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    MetroBlack: require("./assets/fonts/Metropolis-Black.otf"),
    MetroBold: require("./assets/fonts/Metropolis-Bold.otf"),
    MetroLight: require("./assets/fonts/Metropolis-Light.otf"),
    MetroSemiBold: require("./assets/fonts/Metropolis-SemiBold.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Font tidak ditemukan</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text
        style={{
          fontFamily: "MetroBlack",
          fontSize: 24,
        }}
      >
        Ini Font Metropolis Black
      </Text>

      <Text
        style={{
          fontFamily: "MetroBold",
          fontSize: 24,
        }}
      >
        Ini Font Metropolis Bold
      </Text>

      <Text
        style={{
          fontFamily: "MetroSemiBold",
          fontSize: 24,
        }}
      >
        Ini Font Metropolis SemiBold
      </Text>

      <Text
        style={{
          fontFamily: "MetroLight",
          fontSize: 24,
        }}
      >
        Ini Font Metropolis Light
      </Text>
    </View>
  );
};

export default App;
