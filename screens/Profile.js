import React, { useContext } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import DefaultAvatarIcon from "../assets/icons/default-avatar.png";
import { AuthContext } from "../store/context/auth-context";
import VendorMenu from "./sub/account/VendorMenu";
import CustomerMenu from "./sub/account/CustomerMenu";

function Profile() {
  const { userData } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.userInfo}>
          <Image source={DefaultAvatarIcon} style={styles.avatar} />
          <Text style={styles.userName}>{userData.email}</Text>
        </View>
        <View style={styles.userActivity}>
          <View style={styles.item}>
            <Text style={styles.itemNumber}>0</Text>
            <Text style={styles.itemTitle}>All bookings</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemNumber}>0</Text>
            <Text style={styles.itemTitle}>Finished</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemNumber}>0</Text>
            <Text style={styles.itemTitle}>Awaiting Review</Text>
          </View>
        </View>
        {userData && userData.role === "vendor" ? (
          <VendorMenu />
        ) : (
          <CustomerMenu />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    paddingHorizontal: 20,
  },
  userInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontSize: 16,
    color: "#1E1E1E",
    fontWeight: "bold",
  },
  userActivity: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  item: {
    flexDirection: "column",
  },
  itemNumber: {
    color: "#0D579A",
    fontSize: 12,
    textAlign: "center",
  },
  itemTitle: {
    color: "#1E1E1E",
    fontSize: 12,
    textAlign: "center",
  },
});

export default Profile;
