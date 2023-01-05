import React from "react";
import Products from "./src/screens/products";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./src/screens/categories";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Categories} options={{ headerTitleStyle: { fontSize: 20, fontWeight: 'bold' } }} />
        <Stack.Screen name="Products" component={Products} options={{ headerTitleStyle: { fontSize: 20, fontWeight: 'bold' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
