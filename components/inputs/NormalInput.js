import { View, TextInput, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function NormalInput({ title, placeholder, value, onChangeText }) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 12, color: "#1E1E1E" }}>{title}</Text>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "silver",
          alignItems: "center",
          padding: 5,
          marginVertical: 10,
          paddingVertical: 10
        }}
      >
        <TextInput
          style={{ color: "#1E1E1E", width: '100%' }}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

export default NormalInput;
