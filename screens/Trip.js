import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import EmptyTripIcon from "../assets/icons/empty-trip.png";

function Trip({navigation}) {
  /* Mock */
  const trips = [];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trips</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.emptyCard}>
          <Image source={EmptyTripIcon} />
          <Text style={styles.caption}>No Trips Yet!</Text>
          <Text style={styles.description}>
            All you bookings will appear here.
          </Text>
          <TouchableOpacity style={styles.btnSearch}>
            <Text style={styles.btnTitle} onPress={()=>navigation.navigate('SearchHome')}>Stat booking now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#0D579A",
    height: 70,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  emptyCard: {
    marginTop: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  caption: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E1E1E",
  },
  description: {
    marginHorizontal: 40,
    marginTop: 10,
    fontSize: 12,
    color: "#1E1E1E",
    textAlign: "center",
  },
  btnSearch: {
    marginTop: 10,
  },
  btnTitle: {
    color: "#0D579A",
    fontSize: 12
  },
});

export default Trip;
