import {SafeAreaView, Text, View, FlatList} from "react-native";
import {Appbar, ActivityIndicator, Button} from "react-native-paper";
import {useBeers} from "../hooks/useBeers";
import BeerCard from "../components/BeerCard";
import {useState} from "react";

function ListHeaderComponent() {
	return <Text className="text-center text-2xl font-bold p-4">French Beers</Text>;
}

export default function BeersScreen() {
	const [page, setPage] = useState(1);

	const {data, isLoading, isError, error} = useBeers({categories_tags: "french%20beers", page_size: 9, page});

	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1); // Update page state on click
	};

	return (
		<>
			<Appbar.Header className="bg-white">
				<Appbar.Content title="BrewFinder 🍺" />
			</Appbar.Header>
			<SafeAreaView className="flex-1 ">
				<View className="flex-1">
					{isError && !isLoading ? <Text>An error has occurred : {error.message}</Text> : null}
					{isLoading && (
						<Text>
							Loading...
							<ActivityIndicator animating={true} />
						</Text>
					)}
					{data && (
						<FlatList
							className="p-4 flex-1"
							ListHeaderComponent={ListHeaderComponent}
							data={data}
							keyExtractor={(item) => item._id}
							renderItem={({item}) => <BeerCard {...item} />}
							ListFooterComponent={
								<Button mode="outlined" onPress={handleLoadMore} disabled={isLoading || data.length === 0} className="m-4 mb-5 font-bold bg-white">
									Load more
								</Button>
							}
						/>
					)}
				</View>
			</SafeAreaView>
		</>
	);
}
