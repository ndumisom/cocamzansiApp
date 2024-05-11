import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SearchNav from "./navigators/SearchNav";
import AuthContextProvider from "./store/context/auth-context";

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <SearchNav />
      </AuthContextProvider>
    </NavigationContainer>
  );
}
