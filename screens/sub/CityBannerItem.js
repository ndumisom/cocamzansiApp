import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

function CityBannerItem({ obj, selectedCityId, setSelecetedCityId }) {
  const { item } = obj;
  return (
    <TouchableOpacity onPress={() => setSelecetedCityId(item.id)}>
      <Text style={styles.cityEle(item.id === selectedCityId)}>
        {item.name}
      </Text>
      <View style={styles.colorLine(item.id === selectedCityId)} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cityEle: (isSelected) => {
    const color = isSelected ? "#1E1E1E" : "#828282";
    const size = isSelected ? 14 : 12;
    return {
      color: color,
      fontSize: size,
      paddingRight: 20,
    };
  },
  colorLine: (isSelected) => {
    const bgColor = isSelected ? "#0D579A" : "transparent";
    return {
      height: 2,
      backgroundColor: bgColor,
      width: "50%",
    };
  },
});

export default CityBannerItem;
