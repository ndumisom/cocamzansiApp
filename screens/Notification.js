import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import InfoIcon from "../assets/icons/info.png";

function Notification() {
  /* Mock */
  const notifications = [
    {
      id: "#000001",
      type: "info",
      msg: "You've successfully made a booking in Hotel Standford.",
    },
    {
      id: "#000002",
      type: "info",
      msg: "You've successfully rented a Toyota Corolla.",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification</Text>
      </View>
      <ScrollView style={styles.content}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.card}>
            <Image source={InfoIcon} />
            <View style={styles.msg}>
              <Text style={styles.msgText}>{notification.msg}</Text>
              <TouchableOpacity>
                <Text style={styles.detailText}>See details here</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  card: {
      backgroundColor: "white",
      padding: 15,
      marginVertical: 10,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
  },
  msg: {
    marginLeft: 10
  },
  msgText: {
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
  },
  detailText: {
    color: "#0D579A",
    fontSize: 10
  }
});

export default Notification;
