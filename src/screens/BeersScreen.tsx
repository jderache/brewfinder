import {SafeAreaView, Text, View, FlatList} from "react-native";
import {Appbar, ActivityIndicator} from "react-native-paper";
import {useBeers} from "../hooks/useBeers";
import BeerCard from "../components/BeerCard";
import {useNavigation} from "@react-navigation/native";
import React from "react";

function ListHeaderComponent() {
	return <Text className="text-center text-2xl font-bold p-4">French Beers</Text>;
}

export default function BeersScreen() {
	// Add navigation
	const navigation = useNavigation();

	const {data, isLoading, isError, error, refetch, hasNextPage, fetchNextPage} = useBeers({categories_tags: "french%20beers", page_size: 10, page: 1});
	// Pagination logic, infitity scroll
	// @ts-ignore
	const dataArr = data?.pages.flatMap((page) => page.products.map((product) => ({...product, key: product.code}))) ?? [];
	const onReachEnd = () => {
		if (hasNextPage && !isLoading) {
			fetchNextPage();
		}
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
						<Text className="font-bold text-center m-8 flex-row text-sm">
							Loading...
							<ActivityIndicator className="ml-2" animating={true} />
						</Text>
					)}
					{data && <FlatList className="p-4 flex-1" ListHeaderComponent={ListHeaderComponent} data={dataArr as {product_name: string; generic_name: string; image_url: string; code: string}[]} keyExtractor={(item) => item.code} renderItem={({item}) => <BeerCard {...item} navigation={navigation} />} onEndReached={onReachEnd} onEndReachedThreshold={0.9} />}
				</View>
			</SafeAreaView>
		</>
	);
}
