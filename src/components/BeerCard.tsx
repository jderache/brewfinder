import React from "react";
import {Card, Title, Paragraph, Button} from "react-native-paper";
import {Routes} from "../navigation/Routes";
interface BeerCardProps {
	product_name: string;
	generic_name: string;
	image_url: string;
	code: string;
	navigation: any;
	url: string;
	labels: string;
	manufacturing_places: string;
	ingredients_text_fr: string;
	packaging: string;
	product_name_fr: string;
	quantity: string;
}

const BeerCard = ({navigation, product_name, generic_name, image_url, code, url, labels, manufacturing_places, ingredients_text_fr, packaging, product_name_fr, quantity}: BeerCardProps) => {
	return (
		<Card className="bg-white p-2 m-3 flex-1" key={code + "1"}>
			<Card.Cover source={{uri: image_url}} resizeMode="contain" className="w-full h-[300px] flex-col flex-1 mx-auto bg-slate-50" />
			<Card.Content className="p-4 relative">
				<Title className="font-bold text-xl">{product_name}</Title>
				<Paragraph>{generic_name}</Paragraph>
				<Button
					mode="contained"
					className="mt-2"
					onPress={() =>
						navigation.navigate(Routes.BEER_DETAILS_SCREEN, {
							product_name,
							generic_name,
							image_url,
							code,
							url,
							labels,
							manufacturing_places,
							ingredients_text_fr,
							packaging,
							product_name_fr,
							quantity,
						})
					}
				>
					En savoir plus
				</Button>
			</Card.Content>
		</Card>
	);
};

export default BeerCard;
