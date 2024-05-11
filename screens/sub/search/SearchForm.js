import { View } from "react-native";

import CarForm from "./CarForm";
import FlightForm from "./FlightForm";
import HotelForm from "./HotelForm";
import MixedForm from "./MixedForm";

function SearchForm({ navigation, selectedCategory }) {
  return (
    <View>
      {selectedCategory === "Hotel" && <HotelForm navigation={navigation}/>}
      {selectedCategory === "Car" && <CarForm navigation={navigation}/>}
      {selectedCategory === "Flight" && <FlightForm navigation={navigation}/>}
      {selectedCategory === "All" && <MixedForm navigation={navigation}/>}
    </View>
  );
}

export default SearchForm;
