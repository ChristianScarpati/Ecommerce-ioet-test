import { useState, useEffect, createContext, useCallback } from "react";
import { sortProductsFilter } from "../../components/utils/index";
import { getDataProductsList } from "../../components/api/index";
import PropTypes from "prop-types";


const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [sortFilterProducts, setSortFilterProducts] = useState()
  const [descriptionProduct, setDescriptionProduct] = useState("");

  const [productRate, setProductRate] = useState(0)

  const [categoryInitialProducts, setCategoryInitialProducts] = useState([])
  const [categoryFilters, setCategoryFilters] = useState([])

  const [rateOptionProduct, setRateOptionProduct] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getDataProductsList();
        setProducts(productList);
        setCategoryInitialProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const sortProductsByPrice = sortProductsFilter(products, sortFilterProducts)
    setProducts(sortProductsByPrice)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortFilterProducts])


  const handleFilterCategory = useCallback(() => {
    const filterProductCategory = categoryInitialProducts.filter((categoryProduct) => {

      const checkProductCategory = !categoryFilters.length ||
        categoryFilters.includes(categoryProduct.category);

      return checkProductCategory

    })
    setProducts(filterProductCategory)

  }, [categoryFilters, categoryInitialProducts])

  const handleFilterRate = useCallback(() => {
    const filterProductRate = categoryInitialProducts.filter((product) => {
      const roundProductRate = Math.round(product.rating.rate);
      const checkProductRate = !rateOptionProduct || roundProductRate === rateOptionProduct

      return checkProductRate
    })

    setProducts(filterProductRate)
  }, [categoryInitialProducts, rateOptionProduct])

  const searchedProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    const includeProductName = productName.includes(searchText)
    return includeProductName
  });

  return (
    <SearchContext.Provider
      value={{
        products,
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        productRate,
        setProductRate,
        sortFilterProducts,
        setSortFilterProducts,

        // Category
        categoryFilters,
        setCategoryFilters,
        categoryInitialProducts,
        handleFilterCategory,
        
        // Rate Product
        rateOptionProduct,
        setRateOptionProduct,
        handleFilterRate,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
}