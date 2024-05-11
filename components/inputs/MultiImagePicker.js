import React, { useState, useEffect } from "react";
import { Button, Image, View, Text, Pressable, Dimensions, TouchableOpacity } from "react-native";
import { height } from "react-native-daterange-picker/src/modules";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function CustomImagePicker({ title }) {
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);


    const pickImage = async () => {
        setLoading(true)
        // No permissions request is necessary for launching the image library
        const result = await launchImageLibrary({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            mediaType: "photo",
            selectionLimit: 10
        });

        console.log(result);
        console.log(image, "ASDASDs")
        var preArray = image ? image : []
        var array = result.assets
        console.log(preArray, "ASDAS")
        preArray.push(...array)
        if (result) {
            setImage(preArray);
            setLoading(false)

        }
    };

    const pickCamera = async () => {
        setLoading(true)
        // No permissions request is necessary for launching the image library
        const result = await launchCamera({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            mediaType: "photo",
        });

        console.log(result);
        console.log(image, "ASDASDs")
        var preArray = image ? image : []
        var array = result.assets
        console.log(preArray, "ASDAS")
        preArray.push(...array)
        if (result) {
            setImage(preArray);
            setLoading(false)

        }
    };

    return (
        <View>
            <Text style={{ fontSize: 12, color: "#1E1E1E" }}>{title}</Text>
            <View style={{ paddingVertical: 10 }}>
                <View style={{
                    backgroundColor: "silver", padding: 10
                    , borderRadius: 5,
                    width: Dimensions.get('screen').width - 40,
                    height: Dimensions.get('screen').width - 40,
                    alignItems: 'center',
                    justifyContent: 'center'

                }} >
                    <TouchableOpacity onPress={() => pickImage()} style={{ flexDirection: "row", alignItems: "center", }}>
                        <MaterialCommunityIcons name="image-area" size={100} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => pickCamera()} style={{ flexDirection: "row", alignItems: "center", }}>
                        <MaterialCommunityIcons name="camera" size={100} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, width: "100%", flexWrap: 'wrap' }}>
                    {!loading &&
                        !(!image?.length) &&
                        image?.map((item, index) => (
                            <Image key={index} source={{ uri: item?.uri }} style={{ width: (Dimensions.get('screen').width - 80) / 4, height: (Dimensions.get('screen').width - 80) / 4, borderRadius: 5, margin: 5 }} />
                        ))
                    }
                </View>

            </View>
        </View>
    );
}
