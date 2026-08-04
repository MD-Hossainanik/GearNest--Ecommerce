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
              grid_view:action.payload
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

    useEffect(() => {
      
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  const value = { ...state, setGridView };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
