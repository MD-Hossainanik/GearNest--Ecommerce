import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ cartItem }) => {
  const { id, title, image, price, amount, maxorder } = cartItem;
  const { removeItem, amountdecrease, amountincrease } = useCartContext();

  return (
    <div className="cart-row grid grid-five-column">
      <div className="cart-image--name">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <p className="cart-title">{title}</p>
      </div>

      <div className="cart-price">
        <span className="cart-label">Price</span>
        <p>${price}</p>
      </div>

      <div className="cart-qty">
        <span className="cart-label">Quantity</span>
        <CartAmountToggle
          amount={amount}
          amountdecrease={() => amountdecrease(id)}
          amountincrease={() => amountincrease(id)}
          maxOrder={maxorder}
        />
      </div>

      <div className="cart-subtotal">
        <span className="cart-label">Subtotal</span>
        <p>${(price * amount).toFixed(2)}</p>
      </div>

      <div className="cart-remove">
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
