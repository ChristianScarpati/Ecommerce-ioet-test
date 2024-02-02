import { PRICE_HIGH, PRICE_LOW, NAME } from '../../components/constants'

const filterItems = {
    "Name": NAME,
    "Price High": PRICE_HIGH,
    "Price Low": PRICE_LOW
}

export const sortProductsFilter = (products, sortFilter = NAME) => {

    const copiedProducts = JSON.parse(JSON.stringify(products));

    const sortingFunctions = {
        [filterItems['Price Low']]: (a, b) => a.price - b.price,
        [filterItems['Price High']]: (a, b) => b.price - a.price,
        [filterItems["Name"]]: (a, b) => a.title.localeCompare(b.title)
    };

    const sortingFunction = sortingFunctions[sortFilter]

    const sortedProducts = sortingFunction ? [...copiedProducts].sort(sortingFunction) : copiedProducts;

    return sortedProducts;
}

export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
