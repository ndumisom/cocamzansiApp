import { View, TextInput, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import React, { useState, useEffect } from "react";

function PolicyBadge({ title, placeholder, placeholder1, placeholder2, value, onChangeText }) {
    const [policy, setPolicy] = useState([{
        policy: "",
        content: "",
        third: ""
    }]);
    const addPolicy = async () => {
        // No permissions request is necessary for launching the image library
        //    setPolicy
    };
    return (
        <View>
            {policy.map((item, index) => (
                <View style={{ marginVertical: 10 }} key={index} >
                    <Text style={{ fontSize: 12, color: "#1E1E1E", marginBottom: 10 }}>{title}</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "silver",
                            alignItems: "center",
                            paddingVertical: 5,
                            paddingHorizontal: 7,
                            borderRadius: 5
                        }}
                    >
                        <TextInput
                            style={{
                                color: "#1E1E1E", width: '100%', fontWeight: "bold"
                            }}
                            value={item.policy}
                            placeholder={placeholder1}
                        />
                        {placeholder2 && (
                            <TextInput
                                style={{
                                    color: "#1E1E1E", width: '100%', fontWeight: "bold",
                                    paddingTop: 5,
                                }}
                                value={item.third}
                                placeholder={placeholder2}
                            />
                        )}
                        <TextInput
                            style={{
                                color: "#1E1E1E", width: '100%',
                                height: 50,
                                textAlignVertical: 'top'
                            }}
                            value={item.content}
                            placeholder={placeholder}
                            multiline={true}
                            numberOfLines={10}
                        />

                    </View>

                </View>
            ))}

            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ backgroundColor: "teal", padding: 10, borderRadius: 5, width: 80 }} onPress={() => addPolicy()}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <AntDesign name="plussquareo" size={18} style={{ color: 'white', marginRight: 10 }} />
                        <Text style={{ color: "white" }}>
                            Add
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default PolicyBadge;
