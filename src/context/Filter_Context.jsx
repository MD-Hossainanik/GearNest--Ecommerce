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
  }
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

        let { all_products } = state;
        let temFilterProduct = [...all_products];
        let { text } = state.filters;
        if (text) {
          temFilterProduct = temFilterProduct.filter((item) => {
            return item.title.toLowerCase().includes(text.toLowerCase());
          });
        }

        return {
          ...state,
          filter_products: temFilterProduct,
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

  const updateFilterValue = (e) => {
    
    const { name, value } = e.target;

    dispatch({type:"UPDATE_FILTERS-VALUE", payload:{name,value}});
  }

    useEffect(() => {
      
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({type:"FILTER_PRODUCTS"})
    dispatch({ type: "SORTING_PRODUCTS",});
  }, [state.sorting_value,state.filters]);

  const value = { ...state, setGridView, sorting, updateFilterValue };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
