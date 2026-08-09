
import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const useCartContext = () => {
  return useContext(CartContext);
};

const getLocalCartData = () => {
  const localCart = localStorage.getItem("cartItem");

  if (localCart) {
    return JSON.parse(localCart);
  }

  return [];
};

const initialState = {
  cart: getLocalCartData(),
  total_price: "",
  shipping_fee: 50,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let { id, amount, singleProduct } = action.payload;
      const maxOrder = Math.min(
        singleProduct.stock,
        singleProduct.minimumOrderQuantity,
      );
      let existingCart = state.cart.find((item) => item.id === id);

      if (existingCart) {
        alert("This product already in your cart");
        const updatedAmount = existingCart.amount + amount;
        if (updatedAmount > maxOrder) {
          alert("You cannot add more than the maximum order quantity.");
          return state;
        }

        const updatedCart = state.cart.map((item) => {
          return item.id === id
            ? {
                ...item,
                amount: updatedAmount,
              }
            : item;
        });

        return {
          ...state,
          cart: updatedCart,
        };
      }

      let cartProduct = {
        id: id,
        title: singleProduct.title,
        amount: amount,
        image: singleProduct.thumbnail,
        price: singleProduct.price,
        maxorder: maxOrder,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }

    case "AMOUNT_DECREASE": {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          const decreament_amount = item.amount - 1;
          return {
            ...item,
            amount: decreament_amount,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "AMOUNT_INCREASE": {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          const decreament_amount = item.amount + 1;
          return {
            ...item,
            amount: decreament_amount,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "REMOVE_ITEM": {
      let updatedCart = state.cart.filter(
        (items) => items.id !== action.payload,
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }
      
    case "TOTAL_PRICE": {
      const all_price = state.cart.reduce((total, item) => total + (item.amount * item.price), 0);
    
      
      return {
        ...state,
        total_price:all_price,
      }
      }
    

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, singleProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, amount, singleProduct },
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const amountdecrease = (id) => {
    dispatch({
      type: "AMOUNT_DECREASE",
      payload: id,
    });
  }

  const amountincrease = (id) => {
    dispatch({
      type: "AMOUNT_INCREASE",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({
      type: "TOTAL_PRICE",
    });
    localStorage.setItem("cartItem", JSON.stringify(state.cart));
  }, [state.cart]);

  const value = {
    ...state,
    addToCart,
    removeItem,
    clearCart,
    amountdecrease,
    amountincrease,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartProvider, useCartContext };
