import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import HotelList from "../screens/HotelList";
import Request from "../screens/Request";
import OpenRequest from "../screens/OpenRequest";
import Login from "../screens/Login";
import Location from "../screens/Location";
import Service from "../screens/Service";
import SearchContextProvider from "../store/context/search-context";
// import CarList from "../screens/CarList";
// import FlightList from "../screens/FlightList";

const Stack = createNativeStackNavigator();

function SearchNav() {
  return (
    <SearchContextProvider>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HotelList" component={HotelList} />
        <Stack.Screen name="Request" component={Request} />
        <Stack.Screen name="OpenRequest" component={OpenRequest} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Service" component={Service} />

        <Stack.Screen name="SearchHome" component={Search} />
      </Stack.Navigator>
    </SearchContextProvider>
  );
}
export default SearchNav