/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useContext, useEffect, useState } from "react";
// import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    PermissionsAndroid,
    Linking, ScrollView, TextInput, TouchableOpacity, ActivityIndicator,
} from 'react-native';
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
const fetchData  = async (location,route,navigation) => {
    const [fullAddress, setFullAddress] = useState('');
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState('');
    const [loading, setLoading] = useState(false);
    if( location != false) {
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
        fetch(`http://192.168.56.1:8080/v1/geolocation?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                let result1 = JSON.parse(result)
                console.log(result1);
                // setUserData(result1)
            })
            .catch(error => console.log('error', error));
    }
};

const request2  = async (location,route,navigation) => {
    const [fullAddress, setFullAddress] = useState('');
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState('');
    const [loading, setLoading] = useState(false);
    if( location != false) {
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
        fetch(`http://192.168.56.1:8080/v1/geolocation?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                let result1 = JSON.parse(result)
                console.log(result1);
                navigation.navigate("Request", { userData: result , userLoggedIn:route.params})
                // setUserData(result1)
            })
            .catch(error => console.log('error', error));
    }
};

const request1  = async (location,route,navigation) => {
    const [loading, setLoading] = useState(false);
    navigation.navigate("Request")
    var raw = JSON.stringify(
        {
            "addressModel":{
                "addressId":0,
                "city":"string",
                "fullAddress":"string",
                "postalcode":0,
                "streetName":"string",
                "streetNumber":0,
                "suburb":"string"
            },
            "createDateTime":"string",
            "distance":"string",
            "duration":"string",
            "fullAddress":"string",
            "geoLocation":{
                "destination_addresses":[
                    "string"
                ],
                "origin_addresses":[
                    "string"
                ],
                "requestModels":[
                    {

                    }
                ],
                "rows":[
                    {
                        "elements":[
                            {
                                "distance":{
                                    "text":"string",
                                    "value":0
                                },
                                "duration":{
                                    "text":"string",
                                    "value":0
                                },
                                "duration_in_traffic":{
                                    "text":"string",
                                    "value":0
                                },
                                "status":"string"
                            }
                        ]
                    }
                ],
                "status":"string",
                "userModels":[
                    {
                        "actionStatusType":{
                            "message":"string",
                            "success":true
                        },
                        "addressModel":{
                            "addressId":0,
                            "city":"string",
                            "fullAddress":"string",
                            "postalcode":0,
                            "streetName":"string",
                            "streetNumber":0,
                            "suburb":"string"
                        },
                        "emailAddressModel":{
                            "emailAddress":"string",
                            "emailId":0
                        },
                        "firstName":"string",
                        "lastName":"string",
                        "loginModel":{
                            "loginId":0,
                            "password":"string",
                            "username":"string"
                        },
                        "telephoneModel":{
                            "telephoneId":0,
                            "telephoneNumber":"string"
                        },
                        "typeModel":{
                            "typeId":0,
                            "typeName":"string"
                        },
                        "userId":0,
                        "userProfilePicture":"string"
                    }
                ]
            },
            "requestAddressModel":{
                "distnce":"string",
                "duration":"string",
                "firstName":"string",
                "lastName":"string",
                "originalAddress":"string",
                "suburb":"string",
                "userId":"string",
                "userType":"string"
            },
            "requestId":0,
            "requestMessage":"string",
            "status":0,
            "totalServicePrice":0,
            "userFromFirstName":"string",
            "userFromPhoneNumber":"string",
            "userFromProfilePicture":"string",
            "userModelFromId":{
                "actionStatusType":{
                    "message":"string",
                    "success":true
                },
                "addressModel":{
                    "addressId":0,
                    "city":"string",
                    "fullAddress":"Jordan St, Stikland Industrial, Cape Town, 7530",
                    "postalcode":0,
                    "streetName":"string",
                    "streetNumber":0,
                    "suburb":"string"
                },
                "emailAddressModel":{
                    "emailAddress":"string",
                    "emailId":0
                },
                "firstName":"string",
                "lastName":"string",
                "loginModel":{
                    "loginId":0,
                    "password":"string",
                    "username":"string"
                },
                "telephoneModel":{
                    "telephoneId":0,
                    "telephoneNumber":"string"
                },
                "typeModel":{
                    "typeId":0,
                    "typeName":"string"
                },
                "userId":14,
                "userProfilePicture":"string"
            },
            "userModelToId":{
                "actionStatusType":{
                    "message":"string",
                    "success":true
                },
                "addressModel":{
                    "addressId":0,
                    "city":"string",
                    "fullAddress":"string",
                    "postalcode":0,
                    "streetName":"string",
                    "streetNumber":0,
                    "suburb":"string"
                },
                "emailAddressModel":{
                    "emailAddress":"string",
                    "emailId":0
                },
                "firstName":"string",
                "lastName":"string",
                "loginModel":{
                    "loginId":0,
                    "password":"string",
                    "username":"string"
                },
                "telephoneModel":{
                    "telephoneId":0,
                    "telephoneNumber":"string"
                },
                "typeModel":{
                    "typeId":0,
                    "typeName":"string"
                },
                "userId":0,
                "userProfilePicture":"string"
            },
            "userToFirstName":"string",
            "userToPhoneNumber":"string",
            "userToProfilePicture":"string",
            "userType":0
        }
    );
    var myHeaders = new Headers();
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    if( location != false) {
        // fetch("http://192.168.56.1:8080/v1/request", requestOptions)
        //     .then(response => response.json())
        //     .then(result1 => {
        //         setLoading(false)
        //         console.log(result1)
        //         const result = JSON.parse(result1)
        //         console.log(result)
        //         if (result.success == false) {
        //             alert(result.message)
        //         }
        //         else {
        //             navigation.navigate("Service", { user: result })
        //             // navigation.navigate("Service")
        //         }
        //     })
        //     .catch(error => console.log('error', error));
    }
};
const App = ({ route, navigation }) => {
    // state to hold location
    const [location, setLocation] = useState(false);
    const [userinformation, setUserInformation] = useState('');
    const [loading, setLoading] = useState(false);
    // function to check permissions and get Location
    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
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
        })
    };

    // fetchData(location,route,navigation);
    request2(location,route,navigation);
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
    return (
        // <View style={styles.container}>
        //     <Text>Welcome!</Text>
        //     <View
        //         style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        //         <Button title="Get Location" onPress={getLocation}/>
        //     </View>
        //     <Text>Latitude: {location ? location.coords.latitude : null}</Text>
        //     <Text>Longitude: {location ? location.coords.longitude : null}</Text>
        //     <View
        //         style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        //         <Button title="Send Location" onPress={sendLocation} />
        //     </View>
        // </View>

        <ScrollView contentContainerStyle={styles.container}>
            <View>
                {loading ? <View>
                        <ActivityIndicator size={'large'} color="white" />
                    </View>
                    :
                    <TouchableOpacity onPress={() => {
                        setLoading(true)
                        getLocation()
                    }}>
                        <View style={styles.button}>
                            <Text style={{ color: "white" }}>
                                Request Servie
                            </Text>
                        </View>
                    </TouchableOpacity>
                }

            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },

    container: {
        paddingHorizontal: 20,
        backgroundColor: "#06283D",
        paddingVertical: 40,
        flex: 1,
        justifyContent: 'space-evenly'
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
export default App;