import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";


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
import SortIcon from "../../../assets/icons/sort.png";
import FilterIcon from "../../../assets/icons/filter.png";
import LocationIcon from "../../../assets/icons/location.png";

import ExcellentStartIcon from "../../../assets/icons/5star.png";

import Hotel1 from "../../../assets/images/hotel1.png";

function Hotels() {
  /* Mock */
  const properties = [
    {
      id: 1,
      title: "Hotel Stanford",
      score: "4.8/5",
      reviews: "999",
      address: "Arrondissement de Paris",
      capacity: "Price for 1 night, 2 Adults",
      category: "Standard Double Room",
      price: 300,
      lastUpdated: "12/14/2022 6:14"

    },
    {
      id: 2,
      title: "Hotel Stanford",
      score: "4.8/5",
      reviews: "999",
      address: "Arrondissement de Paris",
      capacity: "Price for 1 night, 2 Adults",
      category: "Standard Double Room",
      price: 300,
      lastUpdated: "12/14/2022 6:14"
    }
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.addressBarWrapper}>
          <TouchableOpacity
            style={styles.addressBar}
            onPress={() => navigation.navigate("AccountHome")}
          >
            <MaterialCommunityIcons name="arrow-left" size={16} color="white" />
            <Text style={{ fontSize: 12, color: "white", marginLeft: 5 }}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.addressText}>Manage Hotels</Text>
          <TouchableOpacity onPress={() => navigation.navigate("AddHotel")}>
            <Text style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: "white", borderRadius: 5 }}>Add Hotel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.actionBar}>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate("SearchHome")}
          >
            <Image source={SortIcon} style={styles.actionItemIcon} />
            <Text style={styles.actionItemText}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate("SearchHome")}
          >
            <Image source={FilterIcon} style={styles.actionItemIcon} />
            <Text style={styles.actionItemText}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate("SearchHome")}
          >
            <Image source={LocationIcon} style={styles.actionItemIcon} />
            <Text style={styles.actionItemText}>Location</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false
        }>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }}>

          </View>
          <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
            <Text style={{
              color: "#828282",
              fontSize: 12
            }}>
              Showing 1- 5 of 10 hotels
            </Text>
            <View style={{ flexDirection: 'row', padding: 5, borderColor: 'silver', borderWidth: 1, }}>
              <View style={{ width: 25, height: 25, borderColor: 'gray', borderWidth: 1, marginRight: 6, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', borderRadius: 2 }}>
                <Text>
                  <Fontisto size={10} name={"angle-left"} />
                </Text>
              </View>
              <View style={{ backgroundColor: "#99aef0", width: 25, height: 25, borderColor: 'gray', borderWidth: 1, marginRight: 6, justifyContent: 'center', alignItems: 'center', borderRadius: 2, marginRight: 6 }}>
                <Text style={{ fontSize: 10, color: "white" }}>
                  1
                </Text>
              </View>
              <View style={{ width: 25, height: 25, borderColor: 'gray', borderWidth: 1, marginRight: 6, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', borderRadius: 2, marginRight: 6 }}>
                <Text style={{ fontSize: 10 }}>
                  2
                </Text>
              </View>
              <View style={{ width: 25, height: 25, borderColor: 'gray', borderWidth: 1, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', borderRadius: 2 }}>
                <Text>
                  <Fontisto size={10} name={"angle-right"} />
                </Text>
              </View>
            </View>
          </View>
          {properties.map((property, index) => (
            <View key={index} style={styles.card}>
              <Image source={Hotel1} style={styles.image} />
              <View style={styles.infoPanel}>
                <View style={styles.title}>
                  <Text style={{ fontSize: 16, color: "#1E1E1E", paddingBottom: 10, fontWeight: '600' }}>{property.title}</Text>
                  <View style={{ backgroundColor: "#0D579A", padding: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 11, fontWeight: "600" }}>{property.score}</Text>
                  </View>
                </View>
                <View style={styles.review}>
                  <Image source={ExcellentStartIcon} style={styles.rating} />
                  <Text style={styles.reviewText}> - 999 reviews</Text>
                </View>
                <View style={styles.location}>
                  <Image source={LocationIcon} style={{ width: 20, height: 20 }} />
                  <Text style={{ fontSize: 12, color: "#828282" }}>Arrondissement de Paris</Text>
                </View>
                <View style={styles.capacity}>
                  <Text style={{ fontSize: 10, color: "#1E1E1E" }}>Price for 1 night, 2 Adults</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                  <Text style={{ fontSize: 10, color: "#1E1E1E" }}>{"Last updated at: "}</Text>
                  <Text style={{ fontSize: 10, color: "#1E1E1E" }}>{property.lastUpdated}</Text>
                </View>

                <View style={styles.type}>
                  <Text style={{ fontSize: 8, color: "#1E1E1E" }}>Standard Double Room</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <View style={styles.price}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1E1E1E" }}>$300</Text>
                    <Text style={{ fontSize: 8, color: "#999999" }}>with Taxes</Text>
                  </View>
                  <View style={{ backgroundColor: "green", paddingVertical: 3, paddingHorizontal: 10, borderRadius: 5 }}>
                    <Text style={{ fontSize: 12, color: "white" }}>Publish</Text>
                  </View>
                </View>
                <View style={{
                  flexDirection: "row", justifyContent: "flex-end", alignItems: "center",
                  marginTop: 5, borderTopColor: 'silver', borderTopWidth: 1, paddingTop: 10
                }}>
                  <View style={{ backgroundColor: "#32a883", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, marginLeft: 10 }}>
                    <Text style={{ fontSize: 12, color: "white", }}>View</Text>
                  </View>
                  <View style={{ backgroundColor: "#cfc651", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, marginLeft: 10 }}>
                    <Text style={{ fontSize: 12, color: "white" }}>Edit</Text>
                  </View>
                  <View style={{ backgroundColor: "red", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, marginLeft: 10 }}>
                    <Text style={{ fontSize: 12, color: "white" }}>Delete</Text>
                  </View>
                  <View style={{ backgroundColor: "gray", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, marginLeft: 10 }}>
                    <Text style={{ fontSize: 12, color: "white" }}>Hide</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100
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
    marginLeft: 20,
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  actionItem: {
    flexDirection: "row",
  },
  actionItemText: {
    color: "#828282",
    marginLeft: 5,
    fontSize: 12
  },
  card: {
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  infoPanel: {
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 15
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  score: {
    backgroundColor: "#0D579A",
    color: "white",
    paddingHorizontal: 5,
    fontSize: 12,
    height: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  review: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    width: 90,
    height: 15
  },
  reviewText: {
    color: "#828282",
    fontSize: 8
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  capacity: {
    marginVertical: 10,
  }
});

export default Hotels;
