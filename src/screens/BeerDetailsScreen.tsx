import React from "react";
import {Appbar, Button} from "react-native-paper";
import {Linking, Text, View} from "react-native";
import {Image} from "react-native";

const BeerDetailsScreen = ({navigation, route}: {navigation: any; route: any}) => {
	return (
		<>
			<Appbar.Header className="bg-white">
				<Appbar.BackAction onPress={() => navigation.goBack()} />
				<Appbar.Content title={route.params.product_name} />
			</Appbar.Header>
			<View className="flex-1 bg-white px-10">
				<View className="bg-white p-6">
					<Image source={{uri: route.params.image_url}} resizeMode="contain" className="h-[240px] bg-white-200 p-4" />
				</View>
				<View className="border-t-2 flex-col gap-2">
					{route.params.generic_name !== "" && <Text className="font-bold pt-4">{route.params.generic_name}</Text>}
					{route.params.labels !== "" && <Text>🏷️ {route.params.labels}</Text>}
					{route.params.manufacturing_places !== "" && <Text>🏭 {route.params.manufacturing_places}</Text>}
					{route.params.quantity !== "" && <Text>Quantité : {route.params.quantity}</Text>}
					{route.params.ingredients_text_fr !== "" && <Text>Ingrédients : {route.params.ingredients_text_fr}</Text>}
					{route.params.packaging !== "" && <Text className="mb-4">Emballage : {route.params.packaging}</Text>}
					<Button mode="contained" onPress={() => Linking.openURL(route.params.url)}>
						👨🏼‍💻 Plus d'informations
					</Button>
				</View>
			</View>
		</>
	);
};

export default BeerDetailsScreen;
