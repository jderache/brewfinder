import React from "react";
import { SafeAreaView, Text, View, Image, FlatList} from "react-native"
import { Appbar, ActivityIndicator} from "react-native-paper";
import { useBeers } from "../hooks/useBeers";
import BeerCard from "../components/BeerCard";

export default function BeersScreen() {
  const { data, isLoading, isError, error } = useBeers({ categories_tags: "french%20beers", page_size: 10 });

  return (
    <>
          <Appbar.Header className="bg-white">
            <Appbar.Content title="BrewFinder 🍺" />
          </Appbar.Header>
          <SafeAreaView className="flex-1">
            <View className="flex-1">
            {isError && !isLoading ? <Text>An error has occurred : {error.message}</Text> : null}
            {isLoading && <Text>Loading...<ActivityIndicator animating={true} /></Text>}
            {data && (
              <FlatList className="p-5 flex-1"
                data={data}
                keyExtractor={(item) => item.product_name}
                renderItem={({ item }) => (
                  <BeerCard {...item}/>
                )}
              />
            )}
            </View>
          </SafeAreaView>
    </>
  );
}
