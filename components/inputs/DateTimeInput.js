import React from "react";
import moment from "moment";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function DateTimeInput({ title, isDatePickerVisible, setDatePickerVisibility, date, setDate }) {
  const handleConfirm = (dt) => {
    setDate(dt)
    setDatePickerVisibility(false)
  };

  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 12, color: "#1E1E1E" }}>{title}</Text>
        <Text style={{ fontSize: 12, color: "#1E1E1E" }}>Time</Text>
      </View>
      <TouchableOpacity
        onPress={() => setDatePickerVisibility(true)}
        style={{ borderBottomWidth: 1, borderColor: "#1E1E1E", justifyContent: "space-between", flexDirection: "row", paddingBottom: 10}}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={20}
            color="#0D579A"
          />
          <Text style={{ marginLeft: 10, color: "#1E1E1E" }}>{moment(date).format("MMM DD")}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ marginLeft: 10, color: "#1E1E1E" }}>{moment(date).format("h:mm A")}</Text>
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />
    </View>
  );
}

export default DateTimeInput;
