import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import NormalInput from "../../../components/inputs/NormalInput";
import TextAreaInput from "../../../components/inputs/TextAreaInput";
import PolicyBadge from "../../../components/inputs/PolicyBadge";
import MapPreview from "../../../components/inputs/MapPreview";
import Checkbox from "../../../components/inputs/Checkbox";

import LocationInput from "../../../components/inputs/LocationInput";
import TimeInput from "../../../components/inputs/TimeInput";
import CustomImagePicker from "../../../components/inputs/CustomImagePicker";
import MultiImagePicker from "../../../components/inputs/MultiImagePicker";


function Hotel() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.addressBarWrapper}>
          <TouchableOpacity
            style={styles.addressBar}
            onPress={() => navigation.navigate("VendorHotelList")}
          >
            <MaterialCommunityIcons name="arrow-left" size={16} color="white" />
            <Text style={{ fontSize: 12, color: "white", marginLeft: 5 }}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.addressText}>Add New Hotel</Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 10, borderRadius: 10 }}>
          <View style={{ borderColor: "gray", borderBottomWidth: 1, padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
              Hotel Content
            </Text>
          </View>
          <View style={{ padding: 20, }}>
            <NormalInput title="Title" placeholder="Name of the hotel" />
            <TextAreaInput title="Content" placeholder="Content" />
            <NormalInput title="Youtube Video" placeholder="Youtube link video" />
            <CustomImagePicker title="Banner Image" />
            <MultiImagePicker title="Gallery" />
          </View>
        </View>
        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 10, borderRadius: 10 }}>
          <View style={{ borderColor: "gray", borderBottomWidth: 1, padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
              Location
            </Text>
          </View>
          <View style={{ padding: 20, }}>
            <LocationInput title="Location" />
            <NormalInput title="Real Adress" placeholder="Real Adress" />
            <MapPreview title="The geographic coordinate" />
            <NormalInput title="Map Latitude" placeholder="Map Latitud" />
            <NormalInput title="Map Longitude" placeholder="Map Longitude" />
            <NormalInput title="Map Zoom" placeholder="Map Zoom" />
          </View>
        </View>
        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 10, borderRadius: 10 }}>
          <View style={{ borderColor: "gray", borderBottomWidth: 1, padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
              Hotel Policy
            </Text>
          </View>
          <View style={{ padding: 20, }}>
            <NormalInput title="Hotel Rating Standards" placeholder="Eg : 0-5" />
            <PolicyBadge title="Policy" placeholder="Content" placeholder1="Policy" />
            <PolicyBadge title="Badge" placeholder="Badge" placeholder1="Tag" />
            <CustomImagePicker title="Feature Image" />
          </View>
        </View>
        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 10, borderRadius: 10 }}>
          <View style={{ borderColor: "gray", borderBottomWidth: 1, padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
              Surroundings
            </Text>
          </View>
          <View style={{ padding: 20, }}>
            <PolicyBadge title="Education" placeholder="Distance" placeholder1="Name" placeholder2="Content" />
            <PolicyBadge title="Health" placeholder="Distance" placeholder1="Name" placeholder2="Content" />
            <PolicyBadge title="Transportation" placeholder="Distance" placeholder1="Name" placeholder2="Content" />

          </View>
        </View>
        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 10, borderRadius: 10 }}>
          <View style={{ borderColor: "gray", borderBottomWidth: 1, padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
              Check IN/OUT Time
            </Text>
          </View>
          <View style={{ padding: 20, }}>
            <TimeInput title="Time for check in" />
            <TimeInput title="Time for check out" />
            <NormalInput title="Min day before booking" placeholder="Ex 3" />
            <Text style={{ fontStyle: "italic", fontSize: 12 }}>
              Leave blank if you don't want to use min day before booking option
            </Text>
            <NormalInput title="Min day stays" placeholder="Ex 3" />
            <Text style={{ fontStyle: "italic", fontSize: 12 }}>
              Leave blank if you don't want to use min day stays option
            </Text>

          </View>
        </View>
        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 10, borderRadius: 10 }}>
          <View style={{ borderColor: "gray", borderBottomWidth: 1, padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
              Pricing
            </Text>
          </View>
          <View style={{ padding: 20, }}>
            <NormalInput title="Price" placeholder="Hotel price" />
            <Checkbox title="Enable extra price" />
          </View>
        </View>
        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 10, borderRadius: 10 }}>
          <View style={{ borderColor: "gray", borderBottomWidth: 1, padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
              ATTRIBUTE: PROPERTY TYPE
            </Text>
          </View>
          <View style={{ padding: 20, }}>
            <Checkbox title="Appartments" />
            <Checkbox title="Hotels" />
            <Checkbox title="Home stays" />
            <Checkbox title="Villas" />
            <Checkbox title="Motel" />
            <Checkbox title="Lodges" />
            <Checkbox title="Holiday Home" />
            <Checkbox title="Cruises" />
          </View>
        </View>
        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 10, borderRadius: 10 }}>
          <View style={{ borderColor: "gray", borderBottomWidth: 1, padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
              ATTRIBUTE: FACILITIES
            </Text>
          </View>
          <View style={{ padding: 20, }}>
            <Checkbox title="Wake-up Call" />
            <Checkbox title="Car hire " />
            <Checkbox title="Bicycle hire" />
            <Checkbox title="Flat Tv" />
            <Checkbox title="Laundry and dry cleaning" />
            <Checkbox title="internet - Wifi" />
            <Checkbox title="Cofee and tea" />
          </View>
        </View>
        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 10, borderRadius: 10 }}>
          <View style={{ borderColor: "gray", borderBottomWidth: 1, padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
              ATTRIBUTE: HOTEL SERVICE
            </Text>
          </View>
          <View style={{ padding: 20, }}>
            <Checkbox title="Havana Lobby Bar" />
            <Checkbox title="Fiesita Resturant" />
            <Checkbox title="Hotel Transport Service" />
            <Checkbox title="Free luggage deposit" />
            <Checkbox title="Laundary Services" />
            <Checkbox title="Pets Welcome" />
            <Checkbox title="Tickets" />
          </View>
        </View>
        <TouchableOpacity style={{ backgroundColor: "teal", padding: 10, borderRadius: 5, width: 150, marginBottom: 30, marginLeft: 10 }} onPress={() => addPolicy()}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="save" size={18} style={{ color: 'white', marginRight: 10 }} />
            <Text style={{ color: "white" }}>
              Save Changes
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#0D579A",
  },
  addressBarWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight()
  },
  addressBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  addressText: {
    color: "white",
    fontSize: 16,
    marginLeft: 65,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white"
  }
});

export default Hotel;
