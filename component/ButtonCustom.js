import { Text, View } from "react-native";

export const ButtonCustom = ({ color, text }) => {
  return (
    <View
      style={{
        width: 130,
        height: 80,
        backgroundColor: color,
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
        }}
      >
        {text}
      </Text>
    </View>
  );
};
