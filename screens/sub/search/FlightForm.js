import React from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import DateTimeInput from '../../../components/inputs/DateTimeInput';
import GuestInput from '../../../components/inputs/GuestInput';

import LocationInput from "../../../components/inputs/LocationInput";
import TypeInput from '../../../components/inputs/TypeInput';
import { SearchContext } from '../../../store/context/search-context';

function FlightForm({navigation}) {
  const {
    pickupLocation,
    setPickupLocation,
    dropoffLocation,
    setDropoffLocation,
    pickupDate,
    setPickupDate,
    guest,
    setGuest,
    flightType,
    setFlightType,
    isDatePickerVisible,
    setDatePickerVisibility
  } = React.useContext(SearchContext);

  return (
    <SafeAreaView>
      <LocationInput
        title="From"
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />
      <LocationInput
        title="To"
        value={dropoffLocation}
        onChangeText={setDropoffLocation}
      />
      <DateTimeInput title="Departure Date" date={pickupDate} setDate={setPickupDate} isDatePickerVisible={isDatePickerVisible} setDatePickerVisibility={setDatePickerVisibility}/>
      <TypeInput title="Flight Type" value={flightType} setValue={setFlightType} />
      <GuestInput title="Number of persons" value={guest} setValue={setGuest}/>
      <View style={styles.inputEle}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigation.navigate("FlightList")}
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

export default FlightForm;
