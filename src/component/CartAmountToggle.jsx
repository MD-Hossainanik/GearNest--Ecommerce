import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({
  amount=1,
  amountdecrease,
  amountincrease,
  maxOrder=0,
}) => {
  return (
    <Wrapper>
      <div className="cart-button">
        <div className="amount-toggle">
          <button
            onClick={amountdecrease}
            disabled={amount <= 1}
            aria-label="Decrease quantity"
          >
            <FaMinus />
          </button>
          <div className="amount-style">{amount}</div>
          <button onClick={amountincrease} disabled={amount===maxOrder} aria-label="Increase quantity">
            <FaPlus />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartAmountToggle;

const Wrapper = styled.div`
  .cart-button {
    display: inline-flex;
  }

  .amount-toggle {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    background-color: #f4f4f7;
    border-radius: 3rem;
    padding: 0.5rem 0.8rem;
    width: fit-content;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.2rem;
      height: 3.2rem;
      border: none;
      border-radius: 50%;
      background-color: #fff;
      color: #6254f3;
      font-size: 1.2rem;
      cursor: pointer;
      box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
      transition: all 0.2s ease;

      &:hover:not(:disabled) {
        background-color: #6254f3;
        color: #fff;
        transform: scale(1.08);
      }

      &:active:not(:disabled) {
        transform: scale(0.95);
      }

      &:disabled {
        color: #ccc;
        cursor: not-allowed;
        box-shadow: none;
      }
    }

    .amount-style {
      font-size: 1.6rem;
      font-weight: 600;
      color: #1e2340;
      min-width: 2rem;
      text-align: center;
    }
  }
`;
