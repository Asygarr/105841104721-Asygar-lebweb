import React from "react";
import { StyleSheet } from 'react-native';
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return <AppNavigation />;
}

const styles = StyleSheet.create({
  App: {
    fontFamily: "Metropolis",
  },
});
