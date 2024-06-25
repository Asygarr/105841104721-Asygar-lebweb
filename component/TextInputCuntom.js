import { TextInput } from "react-native";

export const TextInputCustom = ({ keyboardType, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      keyboardType={keyboardType}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={{
        height: 40,
        width: "100%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "white",
      }}
    />
  );
};
