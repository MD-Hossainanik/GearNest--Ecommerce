import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    brand: "All",
    maxPrice: 0,
    price: 0,
    minPrice:0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS": {
      let maxPrice = Math.max(...action.payload.map((curElem) => curElem.price));
       

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          price: maxPrice,
        }
      };
    }

     
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: action.payload,
      };

    case "SET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS": {
      let tempSortProduct = [...state.filter_products];

      if (state.sorting_value === "a-z") {
        tempSortProduct.sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        );
      } else if (state.sorting_value === "z-a") {
        tempSortProduct.sort((a, b) =>
          b.title.toLowerCase().localeCompare(a.title.toLowerCase()),
        );
      } else if (state.sorting_value === "lowest") {
        tempSortProduct.sort((a, b) => a.price - b.price);
      } else if (state.sorting_value === "highest") {
        tempSortProduct.sort((a, b) => b.price - a.price);
      }

      return {
        ...state,
        filter_products: tempSortProduct,
      };
    }

    case "UPDATE_FILTERS-VALUE": {
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "FILTER_PRODUCTS": {
      let tempFilterProduct = [...state.all_products];

      const { text, category, brand, price } = state.filters;

      // Search
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((item) =>
          item.title.toLowerCase().includes(text.toLowerCase()),
        );
      }

      // Category
      if (category !== "All") {
        if (category === "watches") {
          tempFilterProduct = tempFilterProduct.filter((item) =>
            item.tags.includes("watches"),
          );
        } else if (
          category === "mens-watches" ||
          category === "womens-watches" ||
          category === "smartphones"
        ) {
          tempFilterProduct = tempFilterProduct.filter(
            (item) => item.category === category,
          );
        } else if (category === "electronics") {
          tempFilterProduct = tempFilterProduct.filter((item) =>
            item.tags.includes("electronics"),
          );
        }
      }

      // Brand
      if (brand !== "All") {
        tempFilterProduct = tempFilterProduct.filter((item) => item.brand === brand);
      }

      //Price

      if (price) {
        tempFilterProduct = tempFilterProduct.filter((item) => item.price <= price)
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    }
      
    case "CLEAR_ALL_FILTERS": { 
      const maxPrice =
        action.payload.length > 0
          ? Math.max(...action.payload.map((item) => item.price))
          : 0;
    
      return {
        ...state,
        filters: {
          text: "",
          category: "All",
          brand: "All",
          maxPrice: maxPrice,
          price: maxPrice,
          minPrice: 0,
        },
      };
  }

    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const { products = [] } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = (value) => {
    dispatch({ type: "SET_GRID_VIEW", payload: value });
  };

  const sorting = (value) => {
    dispatch({ type: "SET_SORT_VALUE", payload: value });
  };

  const updateFilterValue = (e) => {
    const { name, value } = e.target;

    dispatch({ type: "UPDATE_FILTERS-VALUE", payload: { name, value } });
  };

  const clearFilter = () => {
    
    dispatch({type:"CLEAR_ALL_FILTERS",payload:state.all_products})
  }

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters, products]);

  const value = {
    ...state,
    setGridView,
    sorting,
    updateFilterValue,
    clearFilter,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
