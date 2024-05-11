import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";

function DateRangeInput({ title, start, end, handlePicker }) {
  return (
    <View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 12, color: "#1E1E1E" }}>{title}</Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "#1E1E1E",
            alignItems: "center",
            paddingVertical: 5,
          }}
          onPress={() => handlePicker(true)}
        >
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={20}
            color="#0D579A"
          />
          <Text style={{ marginLeft: 10, color: "#1E1E1E" }}>
            {start + " - " + end}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DateRangeInput;
