// Path: src/navigation/RootNavigator.tsx
import {Routes} from "./Routes";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BeersScreen from "../screens/BeersScreen";
import BeerDetailsScreen from "../screens/BeerDetailsScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name={Routes.BEERS_SCREEN} component={BeersScreen} />
				<Stack.Screen name={Routes.BEER_DETAILS_SCREEN} component={BeerDetailsScreen} options={{presentation: "modal"}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;
