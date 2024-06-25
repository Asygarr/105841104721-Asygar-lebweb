import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TextInputCustom } from "../component/TextInputCuntom";
import { ButtonCustom } from "../component/ButtonCustom";

const SignUpScreen = () => {
  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <Text
          style={{
            fontSize: 34,
            fontFamily: "Metropolis",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <TextInputCustom keyboardType={"default"} placeholder={"name"} />
        <TextInputCustom keyboardType={"email-address"} placeholder={"email"} />
        <TextInputCustom secureTextEntry={true} placeholder={"password"} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 10,
            marginBottom: 25,
          }}
        >
          <Text
            style={{
              fontFamily: "Metropolis",
              fontSize: 14,
            }}
          >
            Already have an account?{" "}
          </Text>
          <Image
            source={require("../assets/Arrow.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>

        <ButtonCustom color={"#DB3022"} text={"Sign Up"} />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            fontFamily: "Metropolis",
            fontSize: 14,
          }}
        >
          Or sign up with social account
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "50%",
            marginTop: 20,
            marginBottom: 50,
          }}
        >
          <Image
            source={require("../assets/Google.png")}
            style={{
              width: 24,
              height: 24,
            }}
          />
          <Image
            source={require("../assets/Facebook.png")}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
