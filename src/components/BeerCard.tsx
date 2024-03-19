import React from "react";
import {Card, Title, Paragraph, Button} from "react-native-paper";
import {Image} from "react-native";

interface BeerCardProps {
	product_name: string;
	generic_name: string;
	image_url: string;
	code: string;
}

const BeerCard = ({product_name, generic_name, image_url, code}: BeerCardProps) => {
	return (
		<Card className="bg-white p-2 m-3" key={code}>
			<Card.Cover source={{uri: image_url}} resizeMode="contain" className="w-full h-[300px] flex-col flex-1 mx-auto bg-slate-50" />
			<Card.Content className="p-4">
				<Title className="font-bold text-xl">{product_name}</Title>
				<Paragraph>{generic_name}</Paragraph>
				<Button mode="contained" className="mt-2" onPress={() => console.log("En savoir plus")} loading={true}>
					En savoir plus
				</Button>
			</Card.Content>
		</Card>
	);
};

export default BeerCard;
