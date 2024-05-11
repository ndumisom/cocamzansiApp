import React, { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateRangePicker from "react-native-daterange-picker";
import BGImage from "../assets/background.png";

import SearchForm from "./sub/search/SearchForm";
import CityBannerItem from "./sub/CityBannerItem";
import { SearchContext } from "../store/context/search-context";
import { getStatusBarHeight } from "react-native-status-bar-height";
import NormalInput from '../components/inputs/NormalInput'

function Search({ route, navigation }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    console.log(route.params?.user?.userIdD)
    fetchData(route.params?.user?.userIdD)
  }, []);
  const fetchData  = async (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Accept', 'application/json');
    // myHeaders.append("Authorization", "Bearer "+getCookie('token'));
    var requestOptions = {
        headers: myHeaders,
        method: 'GET',
        redirect: 'follow',
        credentials: 'include'
      };
    fetch("http://192.168.56.1:8080/v1/users/" + id, requestOptions)
      .then(response => response.text())
      .then(result => {
        let result1 = JSON.parse(result)
        console.log(result1)
        setUserData(result1)
      })
      .catch(error => console.log('error', error));
  }
  if(userData != null){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.bannerText}>
          Profile
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.text}>
          First Name :
        </Text>
        <Text style={styles.value}>
          {userData.firstName}
        </Text>
        <Text style={styles.text}>
          Last Name :
        </Text>
        <Text style={styles.value}>
          {userData.lastName}
        </Text>
        <Text style={styles.text}>
          Telephone Number :
        </Text>
        <Text style={styles.value}>
          {userData.telephoneModel?.telephoneNumber}
        </Text>
        <Text style={styles.text}>
          Address :
          <Text style={styles.value}>
            {userData.addressModel?.fullAddress}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
  } else {

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.bannerText}>
            Profile
          </Text>
        </View>
        <View style={{ padding: 20 }}>
          <Text style={styles.text}>
            First Name :
          </Text>
          <Text style={styles.value}>
            {/* {userData.firstName} */}
          </Text>
          <Text style={styles.text}>
            Last Name :
          </Text>
          <Text style={styles.value}>
            {/* {userData.lastName} */}
          </Text>
          <Text style={styles.text}>
            Telephone Number :
          </Text>
          <Text style={styles.value}>
            {/* {userData.telephoneModel?.telephoneNumber} */}
          </Text>
          <Text style={styles.text}>
            Address :
            <Text style={styles.value}>
              {/* {userData.addressModel?.fullAddress} */}
            </Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#06283D",
    paddingVertical: 40,
    flex: 1,
    justifyContent: 'space-evenly'
  },
  text: {
    fontWeight: '600',
    color: 'white',
    paddingVertical: 10,
    fontSize: 15
  },
  value: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5
  },
  bannerImage: {
    height: 200,
  },
  bannerWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bannerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  categoryBtnWrapper: {
    flexDirection: "row",
  },
  categoryBtn: (isSelected) => {
    const bgColor = isSelected ? "white" : "transparent";
    return {
      width: "20%",
      margin: 10,
      backgroundColor: bgColor,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 30,
    };
  },
  categoryBtnText: (isSelected) => {
    const color = isSelected ? "#0D579A" : "white";
    return {
      color: color,
      textAlign: "center",
    };
  },
  scrollView: {
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  searchText: {
    borderBottomWidth: 1,
    borderColor: "#828282",
  },
  secondaryBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#828282",
    borderRadius: 10,
  },
  cityListWrapper: {
    paddingVertical: 20,
  },
  hiddenDateRangePickerText: {
    display: "none",
  },
  topicWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  topicText: (isSelected) => {
    const color = isSelected ? "#0D579A" : "#1E1E1E";
    return {
      marginHorizontal: 10,
      color: color,
      textAlign: "center",
    };
  },
  topicUnderline: (isSelected) => {
    const color = isSelected ? "#0D579A" : "transparent";
    return {
      height: 2,
      backgroundColor: color,
      alignItems: "center",
    };
  },
  image: {
    padding: 5,
  },
});

export default Search;
