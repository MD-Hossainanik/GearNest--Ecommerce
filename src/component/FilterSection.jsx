import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";
import { useState } from "react";

const FilterSection = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const {
    filters: { text },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  const category = [
    "All",
    ...new Set(all_products.map((item) => item.tags[0])),
  ];

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
                  onClick={() =>
                    setOpenCategory(openCategory === item ? null : item)
                  }
                >
                  {item}
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

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e2340;
    letter-spacing: 0.02rem;
    margin-bottom: 0.4rem;
  }

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

  /* ---- Tablet: same vertical layout, just tighter spacing ---- */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 1.8rem;
    gap: 2rem;
  }

  /* ---- Mobile: tighter still ---- */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1.4rem;
    gap: 1.4rem;

    .filter-search input {
      padding: 0.8rem 1rem;
      font-size: 1.3rem;
    }

    .filter-category button {
      padding: 0.7rem 0.8rem;
      font-size: 1.3rem;
    }

    .sub-category button {
      padding: 0.6rem 0.8rem;
      font-size: 1.2rem;
    }
  }
`;
