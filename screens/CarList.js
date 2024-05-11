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

import Car1 from "../assets/images/car1.png";

function CarList({ navigation }) {
  /* Mock */
  const cars = [
    {
      id: 1,
      make: "Toyota Corolla",
      model: "Small Car",
      seats: 5,
      luggage: 2,
      doors: 4,
      style: "Automatic",
      priceInDay: 60.25,
    },
    {
      id: 1,
      make: "Toyota Corolla",
      model: "Small Car",
      seats: 5,
      luggage: 2,
      doors: 4,
      style: "Automatic",
      priceInDay: 60.25,
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
                <Text style={styles.addressText}>LAX, Los Angels</Text>
                <Text style={styles.periodText}>Dec 13, 1:00 - Dec 19, 10:00</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          {cars.map((car, index) => (
            <View key={index} style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.carMake}>{car.make}</Text>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.carSpecRow}>
                        <View style={{}}>
                            <Image source={Car1}/>
                        </View>
                        <View>
                            <Text style={{color: "#828282", fontSize: 10}}>Category</Text>
                            <Text style={{color: "black", fontSize: 10}}>{car.model}</Text>
                        </View>
                    </View>
                    <View style={styles.carSpecRow}>
                        <View style={{}}>
                            <Text style={styles.carSpecTitle}>No. of seats</Text>
                            <Text style={styles.carSpecValue}>{car.seats}</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.carSpecTitle}>Luggage capacity</Text>
                            <Text style={styles.carSpecValue}>{car.luggage}</Text>
                        </View>
                        <View style={{}}>
                            <Text style={styles.carSpecTitle}>No. of doors</Text>
                            <Text style={styles.carSpecValue}>{car.doors}</Text>
                        </View>
                    </View>
                    <View style={styles.carSpecRow}>
                        <View style={{}}>
                            <Text style={styles.carSpecTitle}>Gear style</Text>
                            <Text style={styles.carSpecValue}>{car.style}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardFooter}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{color: "#0D579A", fontSize: 16}}>${car.priceInDay}/day</Text>
                        <Text style={{color: "#000000", fontSize: 12}}>Total: ${parseFloat(car.priceInDay) * 2}</Text>
                    </View>
                    <TouchableOpacity style={styles.primaryBtn}>
                        <Text style={styles.btnText}>Book now</Text>
                    </TouchableOpacity>
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
  },
  header: {
    backgroundColor: "transparent",
    height: 50,
  },
  addressBarWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    top: 35,
  },
  addressBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
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
    fontSize: 8
  },
  content: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  card: {
      backgroundColor: "white",
      marginVertical: 10,
      borderRadius: 10
  },
  cardHeader: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: "#828282"
  },
  cardContent: {
      padding: 10
  },
  cardFooter: {
      padding: 10,
      borderTopWidth: 1,
      borderColor: "#828282",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
  },
  primaryBtn: {
    backgroundColor: "#0D579A",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  carSpecRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10
  },
  carSpecTitle: {
    color: "#828282",
    fontSize: 10
  },
  carSpecValue: {
    color: "#000000",
    fontSize: 10
  }
});

export default CarList;
