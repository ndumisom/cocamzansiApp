import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

import SortIcon from "../assets/icons/sort.png";
import FilterIcon from "../assets/icons/filter.png";
import ClockIcon from "../assets/icons/clock.png";

function FlightList({ navigation }) {
  /* Mock */
  const flights = [
    {
      id: 1,
      start: "14:30",
      end: "16:50",
      startTicket: "LTN",
      endTicket: "CDG T2D",
      duration: "1hr 20m",
      type: "None stop",
      plane: "easyJet",
      price: 90,
    },
    {
      id: 2,
      start: "14:30",
      end: "16:50",
      startTicket: "LTN",
      endTicket: "CDG T2D",
      duration: "1hr 20m",
      type: "None stop",
      plane: "easyJet",
      price: 90,
    },
    {
      id: 3,
      start: "14:30",
      end: "16:50",
      startTicket: "LTN",
      endTicket: "CDG T2D",
      duration: "1hr 20m",
      type: "None stop",
      plane: "easyJet",
      price: 90,
    },
    {
      id: 4,
      start: "14:30",
      end: "16:50",
      startTicket: "LTN",
      endTicket: "CDG T2D",
      duration: "1hr 20m",
      type: "None stop",
      plane: "easyJet",
      price: 90,
    },
    {
      id: 5,
      start: "14:30",
      end: "16:50",
      startTicket: "LTN",
      endTicket: "CDG T2D",
      duration: "1hr 20m",
      type: "None stop",
      plane: "easyJet",
      price: 90,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.addressBarWrapper}>
          <TouchableOpacity
            style={styles.addressBar}
            onPress={() => navigation.navigate("SearchHome")}
          >
            <MaterialCommunityIcons name="arrow-left" size={20} />
            <View style={styles.address}>
              <Text style={styles.addressText}>LON - PAR</Text>
              <Text style={styles.periodText}>Dec 16</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.caption}>
          <Text style={{fontSize: 16, color: "#1E1E1E"}}>Depart to Paris</Text>
          <Text style={{fontSize: 10, color: "#828282"}}>Average price for 1 adult & taxes incl.</Text>
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
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          {flights.map((flight, index) => (
            <View key={index} style={styles.card}>
              <View>
                  <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 3}}>
                      <Text style={{color: "#1E1E1E", fontSize: 18}}>{flight.start}</Text>
                      <View style={{backgroundColor: "#828282", height: 1, width: 60, marginHorizontal: 10}}></View>
                      <Text style={{color: "#1E1E1E", fontSize: 18}}>{flight.end}</Text>
                  </View>
                  <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 3}}>
                      <Text style={{fontSize: 12, color: "#1E1E1E"}}>{flight.startTicket}</Text>
                      <Text style={{fontSize: 12, color: "#1E1E1E"}}>{flight.endTicket}</Text>
                  </View>
                  <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginVertical: 3}}>
                      <Image source={ClockIcon} />
                      <Text style={{fontSize: 10, color: "#828282", marginHorizontal: 10}}>{flight.duration}</Text>
                      <Text style={{fontSize: 10, color: "#828282"}}> . </Text>
                      <Text style={{fontSize: 10, color: "#828282"}}>{flight.type}</Text>
                  </View>
                  <View style={{marginVertical: 3}}>
                    <Text style={{fontSize: 10, color: "#828282"}}>{flight.plane}</Text>
                  </View>
              </View>
              <View>
                  <Text style={{color: "#0D579A", fontSize: 18}}>${flight.price}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  header: {
    backgroundColor: "transparent",
    height: 50,
  },
  addressBarWrapper: {
    borderRadius: 5,
    position: "absolute",
    top: 35,
  },
  addressBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  address: {
    flexDirection: "column",
    marginLeft: 10,
  },
  addressText: {
    color: "#1E1E1E",
    fontSize: 12,
  },
  periodText: {
    color: "black",
    fontSize: 8,
  },
  content: {
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 10,
  },
  caption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#828282"
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    paddingVertical: 10
  },
  actionItem: {
    flexDirection: "row",
    marginRight: 40
  },
  actionItemText: {
    color: "#828282",
    marginLeft: 5,
    fontSize: 12
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#828282"
  },
});

export default FlightList;
