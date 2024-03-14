import React from "react";
import { SafeAreaView, Text, View, Image, FlatList} from "react-native"
import { Appbar, ActivityIndicator} from "react-native-paper";
import { useBeers } from "../hooks/useBeers";

export default function BeersScreen() {
  const { data, isLoading, isError, error } = useBeers({ categories_tags: "french%20beers", page_size: 10 });

  return (
    <>
          <Appbar.Header>
            <Appbar.Content title="BrewFinder 🍺" />
          </Appbar.Header>
          <SafeAreaView>
              <View className="p-5 h-full">
                {isError && !isLoading ? <Text>An error has occurred : {error.message}</Text> : null}
                {isLoading && <Text>Loading...<ActivityIndicator animating={true} /></Text>}
                {data && (
                  <FlatList
                    data={data}
                    keyExtractor={(item) => item.product_name}
                    renderItem={({ item }) => (
                      <View>
                        <Image source={{ uri: item.image_url }} style={{width: 50, height: 50}}/>
                        <Text>{item.product_name}</Text>
                      </View>
                    )}
                  />
                )}
              </View>
          </SafeAreaView>
    </>
  );
}
