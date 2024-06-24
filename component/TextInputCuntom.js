import { TextInput } from "react-native";

export const TextInputCustom = ({ keyboardType, placeholder, color }) => {
  return (
    <TextInput
      keyboardType={keyboardType}
      placeholder={placeholder}
      style={{
        height: 40,
        borderColor: color,
        borderWidth: 1,
        width: 200,
        padding: 10,
        margin: 10,
        borderRadius: 10,
      }}
    />
  );
};
