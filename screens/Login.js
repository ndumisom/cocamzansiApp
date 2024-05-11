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
function Search({ navigation }) {
  const [userName, serUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const saveData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "loginId": 0,
      "password": password,
      "username": userName
    }
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://192.168.56.1:8080/v1/login", requestOptions)
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
          navigation.navigate("Service", { user: result })
          // navigation.navigate("Service")
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.bannerText}>
          Login
        </Text>
      </View>
      <View>
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
