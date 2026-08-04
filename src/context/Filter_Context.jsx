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
  sorting_value:"lowest",
};

const reducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
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
        let tempSortProduct = [...action.payload];

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
        
      default:
        return state;
    }
};

export const FilterProvider = ({ children }) => {
  const { products = [] } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);
    
  const setGridView = (value) => {
    dispatch({ type: "SET_GRID_VIEW", payload: value });
  }
  
  const sorting = (value) => {
    dispatch({ type: "SET_SORT_VALUE", payload: value });
  }

    useEffect(() => {
      
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sorting_value, products]);

  const value = { ...state, setGridView, sorting };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
