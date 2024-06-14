import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        // alignItems: kolom,
        // justifyContent: baris,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            borderRadius: 10,
          }}
        ></View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "blue",
            borderRadius: 10,
          }}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
