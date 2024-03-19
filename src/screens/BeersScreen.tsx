import React, {useMemo, useCallback} from "react";
import {SafeAreaView, Text, View, FlatList} from "react-native";
import {Appbar, ActivityIndicator, Button} from "react-native-paper";
import {useBeers} from "../hooks/useBeers";
import BeerCard from "../components/BeerCard";

function ListHeaderComponent() {
	return <Text className="text-center text-2xl font-bold p-4">French Beers</Text>;
}

export default function BeersScreen() {
	const {data, isLoading, isError, error, refetch, hasNextPage, fetchNextPage} = useBeers({categories_tags: "french%20beers", page_size: 10, page: 1});

	// Memoized data for optimized rendering
	const formattedData = useMemo(() => {
		return data?.pages.flatMap((page) => page.products.map((product) => ({...product, key: product.code}))) ?? [];
	}, [data]);

	const onReachEnd = useCallback(() => {
		if (hasNextPage && !isLoading) {
			fetchNextPage();
		}
	}, [hasNextPage, isLoading, fetchNextPage]);

	return (
		<>
			<Appbar.Header className="bg-white">
				<Appbar.Content title="BrewFinder " />
			</Appbar.Header>
			<SafeAreaView className="flex-1">
				<View className="flex-1">
					{isError && !isLoading ? (
						<Text>An error has occurred: {error.message}</Text>
					) : isLoading ? (
						<Text className="font-bold text-center m-8 flex-row text-sm">
							Loading...
							<ActivityIndicator className="ml-2" animating={true} />
						</Text>
					) : (
						<FlatList
							className="p-4 flex-1"
							ListHeaderComponent={ListHeaderComponent}
							data={
								formattedData as {
									product_name: string;
									generic_name: string;
									image_url: string;
									code: string;
								}[]
							}
							keyExtractor={(item) => item.code}
							renderItem={({item}) => <BeerCard {...item} />}
							onEndReached={onReachEnd}
							onEndReachedThreshold={0.9}
						/>
					)}
				</View>
			</SafeAreaView>
		</>
	);
}
