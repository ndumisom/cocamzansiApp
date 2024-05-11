import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import moment from "moment";

import LocationInput from "../../../components/inputs/LocationInput";
import DateRangeInput from "../../../components/inputs/DateRangeInput";
import GuestInput from "../../../components/inputs/GuestInput";
import { SearchContext } from "../../../store/context/search-context";

function HotelForm({ navigation }) {
  const {
    dropoffLocation,
    setDropoffLocation,
    dateRange,
    guest,
    setGuest,
    setOpenDateRangePicker,
  } = useContext(SearchContext);

  return (
    <SafeAreaView>
      <LocationInput
        title="Location"
        value={dropoffLocation}
        onChangeText={setDropoffLocation}
      />
      <DateRangeInput
        title="Check In - Out"
        start={moment(dateRange.startDate).format("YYYY-MM-DD")}
        end={moment(dateRange.endDate).format("YYYY-MM-DD")}
        handlePicker={setOpenDateRangePicker}
      />
      <GuestInput title="Guests" value={guest} setValue={setGuest} />
      <View style={styles.inputEle}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigation.navigate("HotelList")}
        >
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputEle: {
    paddingVertical: 15,
  },
  primaryBtn: {
    backgroundColor: "#0D579A",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default HotelForm;
