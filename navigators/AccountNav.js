import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Hotels from "../screens/sub/vendor/Hotels";
import { AuthContext } from "../store/context/auth-context";
import Hotel from "../screens/sub/vendor/Hotel";

const Stack = createNativeStackNavigator();

export default function AccountNav() {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) return <Login />;
  return (
    <Stack.Navigator
      initialRouteName="AccountHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AccountHome" component={Profile} />
      <Stack.Screen name="VendorHotelList" component={Hotels} />
      <Stack.Screen name="AddHotel" component={Hotel} />
    </Stack.Navigator>
  );
}
