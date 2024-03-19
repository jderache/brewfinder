import React from "react";
import {Appbar} from "react-native-paper";

const BeerDetailsScreen = ({navigation}: {navigation: any}) => {
	return (
		<>
			<Appbar.Header>
				<Appbar.BackAction onPress={() => navigation.goBack()} />
				<Appbar.Content title="Beer Details" />
			</Appbar.Header>
		</>
	);
};

export default BeerDetailsScreen;
