import { Text, View } from "react-native";

export const ButtonCustom = ({ color, text }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 48,
        backgroundColor: color,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "Metropolis",
          fontSize: 14,
        }}
      >
        {text}
      </Text>
    </View>
  );
};
