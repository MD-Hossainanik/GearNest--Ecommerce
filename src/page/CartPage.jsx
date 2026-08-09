import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import CartItem from "../component/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";
import NoProductFound from "../ui/NoProductFound";
import { BsArrowLeft, BsTrash } from "react-icons/bs";

const CartPage = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return <NoProductFound />;
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="page-heading">
          <h2>Shopping Cart</h2>
          <p>
            {cart.length} item{cart.length > 1 ? "s" : ""} in your cart
          </p>
        </div>

        <div className="cart-box">
          <div className="cart_heading grid grid-five-column">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>
          </div>

          <div className="cart-item">
            {cart.map((item) => {
              return <CartItem key={item.id} cartItem={item} />;
            })}
          </div>
        </div>

        <div className="cart-two-button">
          <NavLink to="/products" className="cart-btn-link">
            <Button className="btn-outline">
              <BsArrowLeft className="btn-icon" />
              Continue Shopping
            </Button>
          </NavLink>
          <Button className="btn-clear" onClick={clearCart}>
            <BsTrash className="btn-icon" />
            Clear Cart
          </Button>
        </div>

        <div className="order-total--amount">
          <div className="order-total--subdata">
            <h3>Order Summary</h3>

            <div className="order-total--row">
              <p>Subtotal</p>
              <p>${total_price.toFixed(2)}</p>
            </div>
            <div className="order-total--row">
              <p>Shipping Fee</p>
              <p>${shipping_fee}</p>
            </div>

            <hr />

            <div className="order-total--row order-total--final">
              <p>Order Total</p>
              <p>${(total_price + shipping_fee).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartPage;

const Wrapper = styled.section`
  padding: 9rem 0 6rem 0;
  background-color: #fafafc;
  min-height: 60vh;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
  }

  /* ---------- Page heading ---------- */
  .page-heading {
    margin-bottom: 3.2rem;

    h2 {
      font-size: 2.6rem;
      font-weight: 700;
      color: #1e2340;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 1.4rem;
      color: #8a8a94;
    }
  }

  /* ---------- Cart box ---------- */
  .cart-box {
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0.2rem 1.2rem rgb(0 0 0 / 5%);
    overflow: hidden;
  }

  .grid-five-column {
    grid-template-columns: 2.4fr 1fr 1.2fr 1fr 0.6fr;
    grid-template-areas: "image price qty subtotal remove";
    align-items: center;
    gap: 1.6rem;
  }

  .cart_heading {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.04rem;
    color: #8a8a94;
    padding: 1.8rem 2.4rem;
    background-color: #f7f7fa;
    border-bottom: 0.1rem solid rgb(170 170 170 / 20%);

    p:first-child {
      text-align: left;
    }
  }

  .cart-item {
    display: flex;
    flex-direction: column;
    padding: 0 2.4rem;
  }

  .cart-row {
    padding: 2rem 0;
    border-bottom: 0.1rem solid rgb(170 170 170 / 15%);

    &:last-child {
      border-bottom: none;
    }
  }

  .cart-image--name {
    grid-area: image;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    text-align: left;

    figure {
      flex-shrink: 0;
      width: 6rem;
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.7rem;
      background-color: #f8f8fa;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 0.6rem;
      }
    }

    .cart-title {
      font-size: 1.5rem;
      color: #1e2340;
      font-weight: 500;
      text-transform: capitalize;
    }
  }

  .cart-price,
  .cart-subtotal {
    grid-area: price;
    text-align: center;

    p {
      font-size: 1.4rem;
      color: #1e2340;
      font-weight: 500;
    }
  }

  .cart-subtotal {
    grid-area: subtotal;
  }

  .cart-qty {
    grid-area: qty;
    display: flex;
    justify-content: center;
  }

  .cart-remove {
    grid-area: remove;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart-label {
    display: none;
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.4rem;
    border: 0.1rem solid rgb(170 170 170 / 40%);
    border-radius: 0.5rem;
    padding: 0.4rem 1rem;
    width: fit-content;

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.4rem;
    }

    .amount-style {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.7rem;
    color: #e74c3c;
    cursor: pointer;
    transition: transform 0.15s linear;

    &:hover {
      transform: scale(1.15);
    }
  }

  /* ---------- Action buttons: strong override for shared Button ---------- */
  .cart-two-button {
    margin-top: 2.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.6rem;

    .cart-btn-link {
      text-decoration: none;
      display: inline-flex;
    }

    button.btn-outline,
    button.btn-clear {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 0.8rem !important;
      max-width: none !important;
      padding: 1.2rem 2.4rem !important;
      font-size: 1.4rem !important;
      font-weight: 600 !important;
      text-transform: none !important;
      border-radius: 0.6rem !important;
      box-shadow: none !important;
      transition: all 0.2s linear !important;

      &:hover,
      &:active {
        transform: none !important;
        box-shadow: none !important;
      }
    }

    button.btn-outline {
      background-color: #fff !important;
      color: #1e2340 !important;
      border: 0.1rem solid rgb(170 170 170 / 45%) !important;

      &:hover {
        border-color: #1e2340 !important;
        background-color: #f7f7fa !important;
      }
    }

    button.btn-clear {
      background-color: #fff !important;
      color: #e74c3c !important;
      border: 0.1rem solid #e74c3c !important;

      &:hover {
        background-color: #e74c3c !important;
        color: #fff !important;
      }
    }

    .btn-icon {
      font-size: 1.4rem;
    }
  }

  /* ---------- Order summary card ---------- */
  .order-total--amount {
    width: 100%;
    margin: 4rem 0 0 0;
    text-transform: capitalize;
    display: flex;
    justify-content: flex-end;

    .order-total--subdata {
      width: 100%;
      max-width: 40rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      padding: 2.8rem;
      background-color: #fff;
      box-shadow: 0 0.2rem 1.2rem rgb(0 0 0 / 5%);

      h3 {
        font-size: 1.7rem;
        font-weight: 700;
        color: #1e2340;
        text-transform: none;
        margin-bottom: 0.4rem;
      }

      hr {
        border: none;
        border-top: 0.1rem solid rgb(170 170 170 / 25%);
        margin: 0.4rem 0;
      }
    }

    .order-total--row {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
      font-size: 1.4rem;
      color: #6c757d;

      p:last-child {
        font-weight: 500;
        color: #1e2340;
      }
    }

    .order-total--final {
      font-size: 1.8rem;
      padding: 0.4rem 0 0 0;

      p {
        font-weight: 700 !important;
        color: ${({ theme }) => theme.colors.btn} !important;
      }
    }
  }

  /* ================= Large Tablet / Small Laptop ================= */
  @media (max-width: 1024px) {
    padding: 6rem 0 5rem 0;

    .grid-five-column {
      grid-template-columns: 2fr 0.8fr 1.1fr 0.8fr 0.5fr;
      gap: 1.2rem;
    }

    .cart_heading,
    .cart-item {
      padding-left: 1.8rem;
      padding-right: 1.8rem;
    }
  }

  /* ================= Tablet ================= */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-five-column {
      grid-template-columns: 1.8fr 0.8fr 1fr 0.8fr 0.5fr;
      gap: 1rem;
    }

    .cart-image--name figure {
      width: 5.2rem;
      height: 5.2rem;
    }

    .order-total--subdata {
      max-width: 100%;
    }
  }

  /* ================= Mobile: rows become cards ================= */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 4rem 0;

    .container {
      padding: 0 1.5rem;
    }

    .page-heading {
      margin-bottom: 2.2rem;

      h2 {
        font-size: 2.1rem;
      }

      p {
        font-size: 1.3rem;
      }
    }

    .cart_heading {
      display: none;
    }

    .cart-item {
      padding: 0 1.4rem;
    }

    .cart-row.grid-five-column {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "image image remove"
        "price qty subtotal";
      row-gap: 1.4rem;
      column-gap: 1rem;
      padding: 1.8rem 0;
    }

    .cart-image--name {
      figure {
        width: 5rem;
        height: 5rem;
      }

      .cart-title {
        font-size: 1.35rem;
      }
    }

    .cart-price,
    .cart-subtotal,
    .cart-qty {
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4rem;
    }

    .cart-label {
      display: block;
      font-size: 1.05rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.03rem;
      color: #9b9ba3;
    }

    .cart-price p,
    .cart-subtotal p {
      font-size: 1.3rem;
    }

    .amount-toggle {
      padding: 0.3rem 0.7rem;
      gap: 0.8rem;

      .amount-style {
        font-size: 1.7rem;
      }
    }

    .cart-remove {
      justify-content: flex-end;
      align-items: flex-start;
    }

    .cart-two-button {
      margin-top: 2rem;
      flex-direction: column-reverse;
      align-items: stretch;
      gap: 1.2rem;

      .cart-btn-link {
        width: 100%;
      }

      button.btn-outline,
      button.btn-clear {
        width: 100% !important;
      }
    }

    .order-total--amount {
      margin-top: 3.2rem;

      .order-total--subdata {
        padding: 2rem;
        gap: 1.2rem;
        border-radius: 0.8rem;

        h3 {
          font-size: 1.55rem;
        }
      }

      .order-total--row {
        font-size: 1.3rem;
      }

      .order-total--final {
        font-size: 1.6rem;
      }
    }
  }
`;
