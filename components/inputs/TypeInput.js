import { View, Text } from "react-native";
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import SelectPicker from "react-native-form-select-picker";

function TypeInput({ title, value, setValue }) {
  const types = [
    { id: 1, name: "Economy" },
    { id: 2, name: "Premium Economy" },
    { id: 3, name: "Business" },
    { id: 4, name: "First" },
    { id: 5, name: "Multiple" },
  ];
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 12, color: "#1E1E1E" }}>{title}</Text>

      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: "#1E1E1E",
          alignItems: "center",
          paddingVertical: 5,
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <MaterialCommunityIcons name="airplane" size={20} color="#0D579A" />
          <SelectPicker
            onValueChange={(value) => {
              setValue(value);
            }}
            selected={value}
            placeholderStyle={{ color: "#1E1E1E" }}
            style={{ padding: 5 }}
          >
            {Object.values(types).map((val) => (
              <SelectPicker.Item
                label={val.name}
                value={val.name}
                key={val.id}
              />
            ))}
          </SelectPicker>
        </View>
        <MaterialCommunityIcons name="chevron-down" size={20} color="#000000" />
      </View>
    </View>
  );
}

export default TypeInput;
