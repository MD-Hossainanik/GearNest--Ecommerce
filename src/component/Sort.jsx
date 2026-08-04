import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";

const Sort = () => {
  const {
    filter_products = [],
    sorting_value = "lowest",
    setGridView,
    grid_view,
    sorting,
  } = useFilterContext();

  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          onClick={() => setGridView(true)}
          className={grid_view ? "active sort-btn" : "sort-btn"}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          onClick={() => setGridView(false)}
          className={grid_view ? "sort-btn" : "active sort-btn"}
        >
          <BsList className="icon" />
        </button>
      </div>

      <div className="product-data">
        {filter_products.length} Product Available
      </div>

      <div className="sort-selection">
        <form>
          <label htmlFor="sort" className="sr-only">
            Sort products
          </label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            value={sorting_value}
            onChange={(e) => sorting(e.target.value)}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Name(a-z)</option>
            <option value="z-a">Name(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

export default Sort;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .sorting-list--grid {
    display: flex;
    gap: 0.4rem;

    .sort-btn {
      width: 3.6rem;
      height: 3.6rem;
      flex-shrink: 0;
      padding: 0;
      border: none;
      border-radius: 0.4rem;
      background-color: #f1f1f4;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s linear;

      .icon {
        font-size: 1.6rem;
        color: #1e2340;
      }

      &.active {
        background-color: #1e2340;

        .icon {
          color: #fff;
        }
      }

      &:hover:not(.active) {
        background-color: #e4e4e9;
      }
    }
  }

  .product-data {
    font-size: 1.5rem;
    color: #4b4b57;
    text-align: center;
    white-space: nowrap;
  }

  .sort-selection {
    justify-self: end;
    min-width: 0;

    form {
      display: flex;
    }

    .sort-selection--style {
      width: 100%;
      padding: 0.9rem 1.4rem;
      font-size: 1.4rem;
      color: #1e2340;
      border: 0.1rem solid rgb(170 170 170 / 40%);
      border-radius: 0.5rem;
      background-color: #fff;
      cursor: pointer;
      outline: none;
      max-width: 16rem;
      appearance: auto;
      transition: border-color 0.2s linear;

      &:hover,
      &:focus {
        border-color: #1e2340;
      }
    }
  }

  /* ---- Tablet: buttons + dropdown same row, text below full width ---- */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    grid-template-columns: auto auto;
    row-gap: 1.4rem;

    .product-data {
      grid-column: 1 / -1;
      text-align: left;
      order: 3;
    }

    .sort-selection {
      justify-self: end;
    }
  }

  /* ---- Mobile: everything stacked, full width ---- */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
    justify-items: stretch;
    margin: 2rem 0;
    gap: 1.2rem;

    .sorting-list--grid {
      justify-self: start;

      .sort-btn {
        width: 3.2rem;
        height: 3.2rem;

        .icon {
          font-size: 1.4rem;
        }
      }
    }

    .product-data {
      font-size: 1.3rem;
      text-align: left;
    }

    .sort-selection {
      justify-self: stretch;
      width: 100%;

      form {
        width: 100%;
      }

      .sort-selection--style {
        max-width: unset;
        width: 100%;
        padding: 0.8rem 1.2rem;
        font-size: 1.3rem;
      }
    }
  }
`;
