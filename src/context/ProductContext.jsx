import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { getAllProduct, getSingleProduct } from "../api/ProductApi";

const AppContext = createContext();

const useProductContext = () => {
  return useContext(AppContext);
};

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  singleProduct: {},
  isSingleLoading: false,
  isSingleError: false,
  feature: [
    {
      id: 124,
      title: "Smartphones",
      tags: "smartphones",
      image:
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/3.webp",
    },
    {
      id: 100,
      title: "Mobile Accessories",
      tags: "electronics",
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
    },
    {
      id: 93,
      title: "Watches",
      tags: "watches",
      image:
        "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/2.webp",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "SET_API_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload.products.filter((item) =>
          [
            "smartphones",
            "mens-watches",
            "womens-watches",
            "mobile-accessories",
          ].includes(item.category),
        ),
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_ISSingle_LOADING":
      return {
        ...state,
        isSingleLoading: true,
        isSingleError: false,
      };

    case "SET_SINGLE_DATA":
      return {
        ...state,
        isSingleLoading: false,
        isSingleError: false,
        singleProduct: action.payload,
      };

    case "SINGLE_API_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isSingleError: true,
      };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "SET_ISLOADING" });
      try {
        const res = await getAllProduct();
        dispatch({ type: "SET_API_DATA", payload: res.data });
      } catch (error) {
        dispatch({ type: "API_ERROR" });
      }
    };
    fetchProducts();
  }, []);

  const fetchSingleProduct = async (id) => {
    dispatch({ type: "SET_ISSingle_LOADING" });
    try {
      const res = await getSingleProduct(id);
      dispatch({ type: "SET_SINGLE_DATA", payload: res.data });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  const value = { ...state, fetchSingleProduct };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useProductContext };
