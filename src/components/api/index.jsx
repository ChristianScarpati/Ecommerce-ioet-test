import { fetchData } from "../utils/index";
import { GET_PRODUCTS_API } from "../constants";

export const getDataProductsList = async () => {
    return await fetchData(`${GET_PRODUCTS_API}`);
};
