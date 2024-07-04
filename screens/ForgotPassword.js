import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { TextInputCustom } from "../component/TextInputCuntom";
import { ButtonCustom } from "../component/ButtonCustom";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 50,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{
              width: 24,
              height: 24,
              marginLeft: -6,
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 34,
            fontFamily: "MetroBold",
          }}
        >
          Forgot Password
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            fontFamily: "MetroMedium",
            fontSize: 14,
            marginBottom: 15,
          }}
        >
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>

        <TextInputCustom keyboardType={"email-address"} placeholder={"email"} />

        <ButtonCustom color={"#DB3022"} text={"Login"} />
      </View>
    </View>
  );
};

export default ForgotPassword;
