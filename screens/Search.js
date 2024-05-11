import React, { useContext, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
  ActivityIndicator
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateRangePicker from "react-native-daterange-picker";
import BGImage from "../assets/background.png";

import SearchForm from "./sub/search/SearchForm";
import CityBannerItem from "./sub/CityBannerItem";
import { SearchContext } from "../store/context/search-context";
import { getStatusBarHeight } from "react-native-status-bar-height";
import MultiImagePicker from '../components/inputs/MultiImagePicker'

function Search({ navigation }) {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [userName, serUserName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);



  const saveData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "actionStatusType": {
        "message": "string",
        "success": true
      },
      "addressModel": {
        "addressId": 0,
        "city": "string",
        "fullAddress": address,
        "postalcode": 0,
        "streetName": "",
        "streetNumber": 9,
        "suburb": ""
      },
      "emailAddressModel": {
        "emailAddress": email,
        "emailId": 0
      },
      "firstName": name,
      "lastName": surName,
      "loginModel": {
        "loginId": 0,
        "password": password,
        "username": userName
      },
      "telephoneModel": {
        "telephoneId": 0,
        "telephoneNumber": phone
      },
      "typeModel": {
        "typeId": 1,
        "typeName": "1"
      },
      "userId": 0,
      "userProfilePicture": "http://localhost/dreams/cocamzansi/images/logo.jpg"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://192.168.56.1:8080/v1/user", requestOptions)
      .then(response => response.text())
      .then(result1 => {
        setLoading(false)
        console.log(result1)
        const result = JSON.parse(result1)
        console.log(result)
        if (result.success == false) {
          alert(result.message)
        }
        else {
          navigation.navigate("Login")
          alert(result.success)
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.bannerText}>
          Sign up form
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          value={name}
          placeholder={"Your name"}
          onChangeText={setName}
          placeholderTextColor={"silver"}
        />
        <TextInput
          style={styles.textInput}
          value={surName}
          placeholder={"Your surname"}
          onChangeText={setSurName}
          placeholderTextColor={"silver"}
        />
        <TextInput
          style={styles.textInput}
          value={address}
          placeholder={"Full Address"}
          onChangeText={setAddress}
          placeholderTextColor={"silver"}
        />
        <TextInput
          style={styles.textInput}
          value={phone}
          placeholder={"Your phone"}
          onChangeText={setPhone}
          placeholderTextColor={"silver"}
        />
        <TextInput
          style={styles.textInput}
          value={email}
          placeholder={"Your email"}
          onChangeText={setEmail}
          placeholderTextColor={"silver"}
        />
        <TextInput
          style={styles.textInput}
          value={userName}
          placeholder={"Your username"}
          onChangeText={serUserName}
          placeholderTextColor={"silver"}
        />
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder={"Your password"}
          onChangeText={setPassword}
          placeholderTextColor={"silver"}
          secureTextEntry={true}
        />

      </View>
      <View>
        {loading ? <View>
          <ActivityIndicator size={'large'} color="white" />
        </View>
          :
          <TouchableOpacity onPress={() => {
            setLoading(true)
            saveData()
          }}>
            <View style={styles.button}>
              <Text style={{ color: "white" }}>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
        }

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#06283D",
    paddingVertical: 40,
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
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  textInput: {
    width: '100%',
    color: "white",
    borderWidth: 1,
    borderColor: "#1363DF",
    padding: 15,
    marginVertical: 10,
    paddingVertical: 15,
    fontSize: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#5478f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 15,
    marginBottom: 30
  }
});

export default Search;
