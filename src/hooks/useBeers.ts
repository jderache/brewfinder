import {useInfiniteQuery} from "@tanstack/react-query";

const apiUrl = process.env.EXPO_PUBLIC_API_HOST;

export interface Beer {
	product_name: string;
	generic_name: string;
	image_url: string;
	code: string;
}

async function fetchData(params: {categories_tags: string; page_size: number; page: number}): Promise<Beer[]> {
	const url = `${apiUrl}?categories_tags=${params.categories_tags}&page_size=${params.page_size}&fields=url,code,product_name,image_url,labels,manufacturing_places,generic_name,ingredients_text_fr,packaging,product_name_fr,quantity&page=${params.page}`;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Error fetching beers: ${response.statusText}`);
	}

	const data = await response.json();
	console.log(data);
	return data;
}

export const useBeers = (params: {categories_tags: string; page_size: number; page: number}) => {
	return useInfiniteQuery({
		queryKey: ["beers", params?.categories_tags ?? "french%20beers", params?.page_size ?? 9],
		queryFn: ({pageParam = 1}) => fetchData({...params, page: pageParam}),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			if (lastPage.length === 0) {
				return undefined;
			}
			return allPages.length + 1;
		},
	});
};
