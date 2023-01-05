import React from "react";
import Products from "./src/screens/products";
import Details from "./src/screens/details";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./src/screens/categories";
const Stack = createNativeStackNavigator();
export default function App() {
  const opts = { headerTitleStyle: { fontSize: 20, fontWeight: 'bold', color: 'white' }, headerStyle: { backgroundColor: '#439A97' } };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Categories} options={opts} />
        <Stack.Screen name="Products" component={Products} options={opts} />
        <Stack.Screen name="Details" component={Details} options={opts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
