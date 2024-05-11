import { View, TextInput, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function TextAreaInput({ title, placeholder, value, onChangeText }) {
    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 12, color: "#1E1E1E", marginBottom: 10 }}>{title}</Text>
            <View
                style={{
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "silver",
                    alignItems: "center",
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                    borderRadius:5
                }}
            >
                <TextInput
                    style={{
                        color: "#1E1E1E", width: '100%',
                        height: 200, textAlignVertical: 'top'
                    }}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    multiline={true}
                    numberOfLines={10}

                />
            </View>
        </View>
    );
}

export default TextAreaInput;
