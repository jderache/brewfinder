import {useQuery} from "@tanstack/react-query";

const apiUrl = process.env.EXPO_PUBLIC_API_HOST;

export interface Beer {
	product_name: string;
	generic_name: string;
	image_url: string;
	_id: string;
}

async function fetchData(params: {categories_tags: string; page_size: number; page?: number}) {
	const url = `${apiUrl}?categories_tags=${params.categories_tags}&page_size=${params.page_size}${params.page ? `&page=${params.page}` : ""}`;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Error fetching beers: ${response.statusText}`);
	}

	const data = await response.json();
	return data.products as Beer[];
}

export const useBeers = (params?: {categories_tags: string; page_size: number; page?: number}) => {
	return useQuery<Beer[], Error>({
		queryKey: ["beers", params],
		queryFn: () => fetchData(params ?? {categories_tags: "french%20beers", page_size: 5}),
	});
};
