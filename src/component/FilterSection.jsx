import { useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";
import { Button } from "../ui/Button.jsx";

const FilterSection = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const {
    filters: { text, brand, price, maxPrice, minPrice },
    updateFilterValue,
    clearFilter,
    all_products,
  } = useFilterContext();

  const category = [
    "All",
    ...new Set(all_products.map((item) => item.tags[0])),
  ];

  const brands = ["All", ...new Set(all_products.map((item) => item.brand))];

  const subCategory =
    openCategory === "watches"
      ? [
          ...new Set(
            all_products
              .filter((item) => item.tags.includes("watches"))
              .map((item) => item.category),
          ),
        ]
      : [];

  return (
    <Wrapper>
      <div className="filter-search">
        <input
          type="text"
          placeholder="SEARCH"
          name="text"
          value={text}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-category">
        <h3>Category</h3>

        {category.map((item) => (
          <div key={item}>
            {item === "watches" ? (
              <>
                <button
                  type="button"
                  className="category-toggle"
                  onClick={() =>
                    setOpenCategory(openCategory === item ? null : item)
                  }
                >
                  <span>{item}</span>
                  <span
                    className={
                      openCategory === "watches" ? "chevron open" : "chevron"
                    }
                  >
                    ⌄
                  </span>
                </button>

                {openCategory === "watches" && (
                  <div className="sub-category">
                    <button
                      type="button"
                      name="category"
                      value={item}
                      onClick={updateFilterValue}
                    >
                      All Watches
                    </button>

                    {subCategory.map((sub) => (
                      <button
                        key={sub}
                        type="button"
                        name="category"
                        value={sub}
                        onClick={updateFilterValue}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <button
                type="button"
                name="category"
                value={item}
                onClick={updateFilterValue}
              >
                {item}
              </button>
            )}
          </div>
        ))}
      </div>

      <form>
        <div className="filter-brand">
          <h3>Brand Name</h3>
          <select
            name="brand"
            id="brand"
            value={brand}
            onChange={updateFilterValue}
          >
            {brands.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div className="filter-price">
        <h3>Price</h3>
        <p className="price-value">${price}</p>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          step="1"
          name="price"
          onChange={updateFilterValue}
        />
        <div className="price-range-labels">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      <div className="filter-clear">
        <Button onClick={clearFilter}>Clear Filters</Button>
      </div>
    </Wrapper>
  );
};

export default FilterSection;

const Wrapper = styled.section`
  background-color: #fff;
  border: 0.1rem solid rgb(170 170 170 / 25%);
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 0.8rem rgb(0 0 0 / 4%);
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e2340;
    letter-spacing: 0.02rem;
    margin-bottom: 0.4rem;
  }

  /* ---------- Search ---------- */
  .filter-search {
    input {
      width: 100%;
      padding: 1rem 1.2rem;
      font-size: 1.4rem;
      border: 0.1rem solid rgb(170 170 170 / 40%);
      border-radius: 0.5rem;
      outline: none;
      background-color: #fff;
      transition: border-color 0.2s linear;

      &::placeholder {
        color: #a4a4ae;
        letter-spacing: 0.03rem;
      }

      &:focus {
        border-color: #1e2340;
      }
    }
  }

  /* ---------- Category ---------- */
  .filter-category {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    button {
      width: 100%;
      padding: 0.9rem 1rem;
      border: none;
      border-radius: 0.5rem;
      background-color: transparent;
      color: #4b4b57;
      font-size: 1.4rem;
      text-transform: capitalize;
      text-align: left;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        background-color: #f1f1f4;
        color: #1e2340;
      }
    }

    .category-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .chevron {
        font-size: 1.2rem;
        color: #9b9ba3;
        transition: transform 0.2s linear;
        line-height: 1;

        &.open {
          transform: rotate(180deg);
        }
      }
    }

    .active {
      background-color: #1e2340;
      color: #fff;

      &:hover {
        background-color: #1e2340;
        color: #fff;
      }
    }
  }

  .sub-category {
    display: flex !important;
    flex-direction: column;
    gap: 0.2rem !important;
    padding: 0.2rem 0 0.2rem 1.4rem;
    border-left: 0.2rem solid #f1f1f4;
    margin-left: 1rem;

    button {
      padding: 0.7rem 1rem;
      font-size: 1.3rem;
      color: #6b6b77;
    }
  }

  /* ---------- Brand ---------- */
  .filter-brand {
    select {
      width: 100%;
      padding: 0.9rem 1rem;
      font-size: 1.4rem;
      color: #1e2340;
      border: 0.1rem solid rgb(170 170 170 / 40%);
      border-radius: 0.5rem;
      background-color: #fff;
      cursor: pointer;
      outline: none;
      text-transform: capitalize;
      transition: border-color 0.2s linear;

      &:hover,
      &:focus {
        border-color: #1e2340;
      }
    }
  }

  /* ---------- Price ---------- */
  .filter-price {
    h3 {
      margin-bottom: 0;
    }

    .price-value {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e2340;
      margin: 0.6rem 0 1rem 0;
    }

    input[type="range"] {
      width: 100%;
      height: 0.4rem;
      border-radius: 1rem;
      appearance: none;
      background-color: #ececf0;
      outline: none;
      cursor: pointer;
      margin-bottom: 0.8rem;

      &::-webkit-slider-thumb {
        appearance: none;
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 50%;
        background-color: #1e2340;
        border: 0.3rem solid #fff;
        box-shadow: 0 0 0 0.1rem rgb(170 170 170 / 40%);
        cursor: pointer;
        transition: transform 0.15s linear;

        &:hover {
          transform: scale(1.1);
        }
      }

      &::-moz-range-thumb {
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 50%;
        background-color: #1e2340;
        border: 0.3rem solid #fff;
        box-shadow: 0 0 0 0.1rem rgb(170 170 170 / 40%);
        cursor: pointer;
        transition: transform 0.15s linear;

        &:hover {
          transform: scale(1.1);
        }
      }

      &::-moz-range-track {
        height: 0.4rem;
        border-radius: 1rem;
        background-color: #ececf0;
      }
    }

    .price-range-labels {
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      color: #9b9ba3;
    }
  }

  /* ---------- Clear button ---------- */
  .filter-clear {
    button {
      width: 100%;
      padding: 1rem;
      font-size: 1.4rem;
      font-weight: 600;
      color: #1e2340;
      background-color: transparent;
      border: 0.1rem solid #1e2340;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        background-color: #1e2340;
        color: #fff;
      }
    }
  }

  /* ================= Large Tablet / Small Laptop ================= */
  @media (max-width: 1024px) {
    padding: 2rem;
    gap: 2.2rem;
  }

  /* ================= Tablet ================= */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 2rem;
    gap: 2rem;

    h3 {
      font-size: 1.4rem;
    }

    .filter-category button {
      padding: 0.8rem 1rem;
      font-size: 1.35rem;
    }
  }

  /* ================= Mobile ================= */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1.6rem;
    gap: 1.6rem;
    border-radius: 0.6rem;

    h3 {
      font-size: 1.35rem;
      margin-bottom: 0.2rem;
    }

    .filter-search input {
      padding: 0.8rem 1rem;
      font-size: 1.3rem;
    }

    .filter-category button {
      padding: 0.7rem 0.9rem;
      font-size: 1.3rem;
    }

    .sub-category {
      padding: 0.2rem 0 0.2rem 1.1rem;
      margin-left: 0.7rem;

      button {
        padding: 0.6rem 0.8rem;
        font-size: 1.2rem;
      }
    }

    .filter-brand select {
      padding: 0.8rem 0.9rem;
      font-size: 1.3rem;
    }

    .filter-price {
      .price-value {
        font-size: 1.4rem;
      }

      input[type="range"]::-webkit-slider-thumb {
        width: 1.5rem;
        height: 1.5rem;
      }

      input[type="range"]::-moz-range-thumb {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .filter-clear button {
      padding: 0.85rem;
      font-size: 1.3rem;
    }
  }

  /* ================= Small Mobile ================= */
  @media (max-width: 360px) {
    padding: 1.3rem;

    .filter-category button {
      padding: 0.65rem 0.8rem;
      font-size: 1.25rem;
    }
  }
`;
