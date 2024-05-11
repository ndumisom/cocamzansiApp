import React, {useContext, useEffect, useState} from "react";
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
function Search({route,navigation }) {
    const [fullAddress, setFullAddress] =   useState('');
    const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //
    // }, []);
    const saveData = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let userLoggedId = route.params.userLoggedIn.user.userIdD;
        let userDataJson = JSON.parse(route.params.userData)
        console.log(userDataJson);
        let listOfUsers = route.params.userData.userModels;
        // let fullAddress = userDataJson.origin_addresses.at(0);
        if(fullAddress != null && fullAddress != '') {
            setFullAddress(userDataJson.origin_addresses.at(0));
        }
        let userId = userLoggedId

        // setFullAddress((route.params.userData.userModels))
        // console.log(route.params.userData.userModels)
        // console.log(route.params.userData.userModels[0].fullAddress)
        var raw = JSON.stringify(
            {
                "addressModel":{
                    "addressId":0,
                    "city":"string",
                    "fullAddress":fullAddress,
                    "postalcode":0,
                    "streetName":"string",
                    "streetNumber":0,
                    "suburb":"string"
                },
                "createDateTime":"string",
                "distance":"string",
                "duration":"string",
                "fullAddress":fullAddress,
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
                                "fullAddress":fullAddress,
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
                "requestMessage":"Test message",
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
                        "fullAddress":fullAddress,
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
                    "userId":userId,
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
                        "fullAddress":fullAddress,
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

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://192.168.56.1:8080/v1/request", requestOptions)
            .then(response => response.text())
            .then(result1 => {
                setLoading(false);
                console.log(result1)
                const result = JSON.parse(result1)
                console.log(result)
                if (result.success == false) {
                    alert(result.message)
                }
                else {
                    navigation.navigate("OpenRequest", { user: result ,userLoggedIn:userLoggedId})
                    // navigation.navigate("Service")
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.bannerText}>
                    Request Service
                </Text>
            </View>
            <View>
                <TextInput
                    style={styles.textInput}
                    value={fullAddress}
                    placeholder={"enter your address"}
                    onChangeText={setFullAddress}
                    placeholderTextColor={"silver"}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("SearchHome")}>
                <Text style={{ color: 'white', padding: 10, marginVertical: 30 }}>
                    Don't have an account? click here to sign up
                </Text>
            </TouchableOpacity>
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
                                Login
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

export default Search;