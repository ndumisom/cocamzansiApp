import { useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../../../store/context/auth-context";

function VendorMenu() {
  const { setIsAuth } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View style={styles.userLinks}>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="account" size={20} />
        <Text style={styles.linkText}>Manage Your Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("VendorHotelList")}>
        <MaterialCommunityIcons name="bed" size={20} />
        <Text style={styles.linkText}>Manage Hotel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="transit-detour" size={20} />
        <Text style={styles.linkText}>Manage Tour</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="space-invaders" size={20} />
        <Text style={styles.linkText}>Manage Space</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="car" size={20} />
        <Text style={styles.linkText}>Manage Car</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="calendar-multiple-check" size={20} />
        <Text style={styles.linkText}>Manage Event</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="card-bulleted" size={20} />
        <Text style={styles.linkText}>Rewards and Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="gift-outline" size={20} />
        <Text style={styles.linkText}>Gift Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="information-outline" size={20} />
        <Text style={styles.linkText}>Abount Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="star" size={20} />
        <Text style={styles.linkText}>Reviews</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="file-document-outline" size={20} />
        <Text style={styles.linkText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <MaterialCommunityIcons name="cog-outline" size={20} />
        <Text style={styles.linkText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => setIsAuth(false)}>
        <MaterialCommunityIcons name="logout" size={20} />
        <Text style={styles.linkText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  userLinks: {
    marginTop: 15,
    flexDirection: "column",
  },
  link: {
    paddingVertical: 10,
    flexDirection: "row",
  },
  linkText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#1E1E1E",
  },
});

export default VendorMenu;
