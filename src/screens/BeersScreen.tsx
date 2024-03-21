import {SafeAreaView, Text, View, FlatList} from "react-native";
import {Appbar, ActivityIndicator, Button} from "react-native-paper";
import {useBeers} from "../hooks/useBeers";
import BeerCard from "../components/BeerCard";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {useState} from "react";

function ListHeaderComponent({handleCategoryChange, selectedCategory, count}: {handleCategoryChange: any; selectedCategory: string; count: number}) {
	return (
		<>
			<View className="flex-col	 justify-center p-4">
				<Text className="text-center font-bold text-xl">Partez à la découverte de la bière avec BrewFinder !</Text>
				<Text className="text-center text-xl mt-2">Choisissez un drapeau ci-dessous.</Text>
				<Text className="text-center text-xl">
					{count} bières listées pour {selectedCategory === "french%20beers" ? "🇫🇷" : selectedCategory === "german%20beers" ? "🇩🇪" : selectedCategory === "belgian%20beers" ? "🇧🇪" : "🍺"}
				</Text>
			</View>
			<View style={{flexDirection: "row", justifyContent: "space-around"}}>
				<Button mode={selectedCategory === "french%20beers" ? "outlined" : "text"} onPress={() => handleCategoryChange("french%20beers")}>
					🇫🇷
				</Button>
				<Button mode={selectedCategory === "german%20beers" ? "outlined" : "text"} onPress={() => handleCategoryChange("german%20beers")}>
					🇩🇪
				</Button>
				<Button mode={selectedCategory === "belgian%20beers" ? "outlined" : "text"} onPress={() => handleCategoryChange("belgian%20beers")}>
					🇧🇪
				</Button>
			</View>
		</>
	);
}

export default function BeersScreen() {
	// Add navigation
	const navigation = useNavigation();
	const [selectedCategory, setSelectedCategory] = useState("french%20beers");
	const {data, isLoading, isError, error, refetch, hasNextPage, fetchNextPage} = useBeers({categories_tags: selectedCategory, page_size: 10, page: 1});

	// Pagination logic, infitity scroll
	// @ts-ignore
	const dataArr = data?.pages.flatMap((page, index) => page.products.map((product) => ({...product, key: `${product.code}_${index}`}))) ?? [];
	const onReachEnd = () => {
		if (hasNextPage && !isLoading) {
			fetchNextPage();
		}
	};

	const handleCategoryChange = (newCategory: any) => {
		setSelectedCategory(newCategory);
		refetch();
	};

	return (
		<>
			<Appbar.Header className="bg-white">
				<Appbar.Content title="BrewFinder 🍺" />
			</Appbar.Header>
			<SafeAreaView className="flex-1 ">
				<View className="flex-1">
					{data && (
						<FlatList
							className="p-4 flex-1"
							// @ts-ignore
							ListHeaderComponent={() => <ListHeaderComponent handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} count={data.pages[0].count} />}
							data={dataArr as {product_name: string; generic_name: string; image_url: string; code: string}[]}
							keyExtractor={(item, index) => item.code + index}
							// @ts-ignore
							renderItem={({item}) => <BeerCard {...item} navigation={navigation} />}
							onEndReached={onReachEnd}
							onEndReachedThreshold={0.9}
						/>
					)}
					{isError && !isLoading ? <Text>An error has occurred : {error.message}</Text> : null}
					{isLoading && (
						<Text className="font-bold text-center m-8 flex-row text-sm">
							Loading...
							<ActivityIndicator className="ml-2" animating={true} />
						</Text>
					)}
				</View>
			</SafeAreaView>
		</>
	);
}
