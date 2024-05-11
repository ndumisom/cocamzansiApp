import { View, TextInput, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";
function Checkbox({ title, placeholder, value, onChangeText }) {
    return (
        <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', }}>
            <View >
                <CheckBox
                    //   value={isSelected}
                    //   onValueChange={setSelection}
                    boxType={"square"}
                    style={{
                        width: 20,
                        height: 20,
                    }}
                />
            </View>

            <Text style={{ marginLeft: 10 }}>
                {title}
            </Text>

        </View>
    );
}

export default Checkbox;
