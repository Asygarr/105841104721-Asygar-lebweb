import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { ButtonCustom } from "./component/ButtonCustom";
import { TextInputCustom } from "./component/TextInputCuntom";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <TextInputCustom
          keyboardType="default"
          placeholder="Nama Lengkap"
          color="green"
        />

        <TextInputCustom
          keyboardType="numeric"
          placeholder="Umur"
          color="yellow"
        />

        <TextInputCustom
          keyboardType="email-address"
          placeholder="Email"
          color="red"
        />

        <TextInputCustom
          keyboardType="default"
          placeholder="Password"
          color="blue"
        />
      </View>

      {/* <ButtonCustom color="red" text="Sign In" />
      <ButtonCustom color="blue" text="Sign Up" /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
