import { View, TextInput, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function LocationInput({ title, value, onChangeText }) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 12, color: "#1E1E1E" }}>{title}</Text>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: "#1E1E1E",
          alignItems: "center",
          paddingVertical: 7,
        }}
      >
        <MaterialCommunityIcons name="map-marker" size={20} color="#0D579A" />
        <TextInput
          style={{
            marginLeft: 10,
            color: "#1E1E1E",
            width: '90%'
          }}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

export default LocationInput;
