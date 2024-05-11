import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";

function GuestInput({ title, value, setValue }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [adult, setAdult] = useState(value.adult);
  const [children, setChildren] = useState(value.children);
  const [room, setRoom] = useState(value.room);

  const _apply = () => {
    setValue({
      adult,
      children,
      room,
    });
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 12, color: "#1E1E1E" }}>{title}</Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.guestItem}>
              <Text>Adults</Text>
              <View style={styles.numberSpinner}>
                <TouchableOpacity
                  style={styles.spinBtn}
                  onPress={() =>
                    adult === 0 ? setAdult(0) : setAdult(adult - 1)
                  }
                >
                  <MaterialCommunityIcons
                    name="minus"
                    size={20}
                    color="#0D579A"
                  />
                </TouchableOpacity>
                <Text style={styles.guestValueText}>{adult}</Text>
                <TouchableOpacity
                  style={styles.spinBtn}
                  onPress={() => setAdult(adult + 1)}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    size={20}
                    color="#0D579A"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.guestItem}>
              <Text>Children</Text>
              <View style={styles.numberSpinner}>
                <TouchableOpacity
                  style={styles.spinBtn}
                  onPress={() =>
                    children === 0 ? setChildren(0) : setChildren(children - 1)
                  }
                >
                  <MaterialCommunityIcons
                    name="minus"
                    size={20}
                    color="#0D579A"
                  />
                </TouchableOpacity>
                <Text style={styles.guestValueText}>{children}</Text>
                <TouchableOpacity
                  style={styles.spinBtn}
                  onPress={() => setChildren(children + 1)}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    size={20}
                    color="#0D579A"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.guestItem}>
              <Text>Rooms</Text>
              <View style={styles.numberSpinner}>
                <TouchableOpacity
                  style={styles.spinBtn}
                  onPress={() => (room === 0 ? setRoom(0) : setRoom(room - 1))}
                >
                  <MaterialCommunityIcons
                    name="minus"
                    size={20}
                    color="#0D579A"
                  />
                </TouchableOpacity>
                <Text style={styles.guestValueText}>{room}</Text>
                <TouchableOpacity
                  style={styles.spinBtn}
                  onPress={() => setRoom(room + 1)}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    size={20}
                    color="#0D579A"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={_apply}
            >
              <Text style={styles.textStyle}>Apply</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: "#1E1E1E",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <MaterialCommunityIcons
          name="account-multiple-plus"
          size={20}
          color="#0D579A"
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{ marginLeft: 10, color: "#1E1E1E" }}>
            {adult} Adult - {children} Child
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: "#0D579A",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  guestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  numberSpinner: {
    flexDirection: "row",
    alignItems: "center",
  },
  guestValueText: {
    marginHorizontal: 5,
  },
  spinBtn: {
    borderColor: "#0D579A",
    borderWidth: 1,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GuestInput;
