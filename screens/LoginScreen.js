import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { TextInputCustom } from "../component/TextInputCuntom";
import { ButtonCustom } from "../component/ButtonCustom";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
          flexGrow: 1,
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 50,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onPress={() => navigation.navigate("Sign Up")}
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
          Login
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <TextInputCustom keyboardType={"email-address"} placeholder={"email"} />
        <TextInputCustom secureTextEntry={true} placeholder={"password"} />

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("Forgot Password")}
        >
          <Text
            style={{
              fontFamily: "MetroMedium",
              fontSize: 14,
            }}
          >
            Forgot your password?{" "}
          </Text>
          <Image
            source={require("../assets/Arrow.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <ButtonCustom color={"#DB3022"} text={"Login"} />
        </TouchableOpacity>
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
            fontFamily: "MetroMedium",
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

export default LoginScreen;
