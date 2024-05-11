import React from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import DateTimeInput from '../../../components/inputs/DateTimeInput';
import GuestInput from '../../../components/inputs/GuestInput';

import LocationInput from "../../../components/inputs/LocationInput";
import TypeInput from '../../../components/inputs/TypeInput';
import { SearchContext } from '../../../store/context/search-context';

function MixedForm({navigation}) {
  const {
    pickupLocation,
    setPickupLocation,
    dropoffLocation,
    setDropoffLocation,
    pickupDate,
    setPickupDate,
    dropoffDate,
    setDropoffDate,
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
        title="Pick-up location"
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />
      <LocationInput
        title="Drop-off location"
        value={dropoffLocation}
        onChangeText={setDropoffLocation}
      />
      <DateTimeInput title="Pick-up Date" date={pickupDate} setDate={setPickupDate} isDatePickerVisible={isDatePickerVisible} setDatePickerVisibility={setDatePickerVisibility}/>
      <DateTimeInput title="Drop-off Date" date={dropoffDate} setDate={setDropoffDate} isDatePickerVisible={isDatePickerVisible} setDatePickerVisibility={setDatePickerVisibility}/>
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

export default MixedForm;
