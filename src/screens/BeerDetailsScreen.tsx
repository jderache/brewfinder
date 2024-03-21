import React from "react";
import {Appbar, Avatar} from "react-native-paper";
import {Text} from "react-native";

const BeerDetailsScreen = ({navigation, route}: {navigation: any; route: any}) => {
	return (
		<>
			<Appbar.Header>
				<Appbar.BackAction onPress={() => navigation.goBack()} />
				<Appbar.Content title={route.params.product_name} />
			</Appbar.Header>
			<Avatar.Image size={100} source={{uri: route.params.image_url}} />
			<Text>{route.params.product_name}</Text>
		</>
	);
};

export default BeerDetailsScreen;
