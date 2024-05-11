import React, { useState, useEffect } from "react";
import { Button, Image, View, Text, Pressable, Dimensions, TouchableOpacity } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function CustomImagePicker({ title }) {
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
        {image?.assets[0]?.uri ?
          <Image source={{ uri: image?.assets[0]?.uri }} style={{ width: Dimensions.get('window').width - 60, height: Dimensions.get('window').width - 60 }} />
          :
          <TouchableOpacity onPress={() => pickImage()}>
            <View style={{ width: Dimensions.get('window').width - 60, height: Dimensions.get('window').width - 60, backgroundColor: "silver", justifyContent: "center", alignItems: "center" ,borderRadius:10}}>
              <Text>
                Click to select image
              </Text>
            </View>
          </TouchableOpacity>

        }
      </View>
    </View>
  );
}
