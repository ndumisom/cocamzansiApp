import React, { useState, useEffect } from "react";
import { Button, Image, View, Text, Pressable, Dimensions, TouchableOpacity } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
export default function MapPreview({ title }) {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const result = await launchImageLibrary({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            mediaType: "photo"
        });

        console.log(result);

        if (result) {
            setImage(result);
        }
    };

    return (
        <View>
            <Text style={{ fontSize: 12, color: "#1E1E1E" }}>{title}</Text>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 10 }}>
                <Image source={require('../../assets/images/map.png')} style={{ width: Dimensions.get('window').width - 80, height: 200 }} />

                {/* <TouchableOpacity onPress={() => pickImage()}>
                    <View style={{ width: Dimensions.get('window').width - 80, height: 200, backgroundColor: "silver", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                        <Text>
                            Click to select image
                        </Text>
                    </View>
                </TouchableOpacity> */}

            </View>
        </View>
    );
}
