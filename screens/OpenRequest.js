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
    Dimensions, TextInput, ActivityIndicator
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
    console.log(route.params)
    useEffect(() => {
        console.log(route.params?.userLoggedIn)
        fetchData(route.params?.userLoggedIn)
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
        fetch("http://192.168.56.1:8080/v1/request/" + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                let result1 = JSON.parse(result)
                console.log(result1)
                setUserData(result1)
            })
            .catch(error => console.log('error', error));
    }
    console.log("userData :" + userData);
    if(userData != null){
        return (
            // <ScrollView contentContainerStyle={styles.container}>
            //     <View>
            //         <Text style={styles.bannerText}>
            //             Open Request
            //         </Text>
            //     </View>
            //     <View style={{ padding: 2 }}>
            //         <Text style={styles.value}>
            //             {userData[0].geoLocation.requestModels[0].fullAddress}
            //         </Text>
            //     </View>
            // </ScrollView>

            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Text style={styles.bannerText}>
                        Open Request
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        value={userData[0].geoLocation.requestModels[0].fullAddress}
                        placeholder={userData[0].geoLocation.requestModels[0].fullAddress}
                        // onChangeText={serUserName}
                        placeholderTextColor={"silver"}
                    />
                </View>
            </ScrollView>

        );
    } else {

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Text style={styles.bannerText}>
                        Open Request
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        // value={userData[0].geoLocation.requestModels[0].fullAddress}
                        // placeholder={userData[0].geoLocation.requestModels[0].fullAddress}
                        // onChangeText={serUserName}
                        placeholderTextColor={"silver"}
                    />
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
