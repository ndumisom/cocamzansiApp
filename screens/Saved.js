import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import EmptyDocIcon from "../assets/icons/empty-doc.png";

function Saved({navigation}) {
  /* Mock */
  const properties = [];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saved</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.emptyCard}>
          <Image source={EmptyDocIcon} />
          <Text style={styles.caption}>Like it, Save it!</Text>
          <Text style={styles.description}>
            Properties you’ve saved will appear here. You currently have no
            saved property.
          </Text>
          <TouchableOpacity style={styles.btnSearch} onPress={()=>navigation.navigate('SearchHome')}>
            <Text style={styles.btnTitle}>Search now</Text>
          </TouchableOpacity>
        </View>
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
  emptyCard: {
    marginTop: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  caption: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E1E1E",
  },
  description: {
    marginHorizontal: 40,
    marginTop: 10,
    fontSize: 12,
    color: "#1E1E1E",
    textAlign: "center",
  },
  btnSearch: {
    marginTop: 10,
    backgroundColor: "#0D579A",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Saved;
