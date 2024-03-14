// Path: src/navigation/RootNavigator.tsx
import { Routes } from "./Routes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BeersScreen from "../screens/BeersScreen";



const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.BEERS_SCREEN} component={BeersScreen} />
        {/* <Stack.Screen name={Routes.BEER_DETAIL_SCREEN} component={BeerDetailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;