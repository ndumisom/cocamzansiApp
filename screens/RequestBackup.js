/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    PermissionsAndroid,
    Linking,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Dimensions,
    TextInput,
    ActivityIndicator
} from 'react-native';
import SafeAreaView from "react-native-safe-area-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateRangePicker from "react-native-daterange-picker";
import BGImage from "../assets/background.png";

import SearchForm from "./sub/search/SearchForm";
import CityBannerItem from "./sub/CityBannerItem";
import { SearchContext } from "../store/context/search-context";
import { getStatusBarHeight } from "react-native-status-bar-height";
import MultiImagePicker from '../components/inputs/MultiImagePicker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Geolocation from 'react-native-geolocation-service';
// Function to get permission for location
const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
            console.log('You can use Geolocation');
            return true;
        } else {
            console.log('You cannot use Geolocation');
            return false;
        }
    } catch (err) {
        return false;
    }
};

const fetchData  = async (location , { navigation }) => {
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
    fetch(`http://192.168.56.1:8080/v1/currentaddress?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            let result1 = JSON.parse(result)
            console.log(result1)
            console.log("navigation 1" ,navigation)
            navigation.navigate("Location", { currentaddress: result1 });
        })
        .catch(error => console.log('error', error));
}
const App = ({ navigation }) => {
    // state to hold location
    const [location, setLocation] = useState(false);
    // function to check permissions and get Location
    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
                        console.log(position);
                        setLocation(position);
                    },
                    error => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                        setLocation(false);
                    },
                    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
                );
            }
        });
        fetchData(location , navigation);
        // console.log("userData :" +fetchData(location));
    };
    // Function to Send Location to twitter
    const sendLocation = () => {
        try {
            if (location) {
                const tweet = `latitude is ${location.coords.latitude} and longitude is ${location.coords.longitude}`;
                const url = `https://twitter.com/intent/tweet?text=${tweet}`;
                Linking.openURL(url);
            }
        } catch (error) {
            console.log(error);
        }
    };
    if(location != null){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}
                                  onPress={() => navigation.navigate("Location")}>
                    <Text style={{ color: 'white', padding: 10, marginVertical: 30 }}>
                        Don't have an account? click here to sign up
                    </Text>
                </TouchableOpacity>
                <Text>Welcome!</Text>
                <View
                    style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
                    <Button title="Get Location" onPress={getLocation} />
                </View>
                <Text>Latitude: {location ? location.coords.latitude : null}</Text>
                <Text>Longitude: {location ? location.coords.longitude : null}</Text>
                <View
                    style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
                    <Button title="Send Location" onPress={sendLocation} />
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate("SearchHome")}>
                    <Text style={{ color: 'white', padding: 10, marginVertical: 30 }}>
                        Don't have an account? click here to sign up
                    </Text>
                </TouchableOpacity>
                <Text>Welcome!</Text>
                <View
                    style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
                    <Button title="Get Location" onPress={getLocation} />
                </View>
                <Text>Latitude: </Text>
                <Text>Longitude: </Text>
                <View
                    style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
                    <Button title="Send Location" onPress={sendLocation} />
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;