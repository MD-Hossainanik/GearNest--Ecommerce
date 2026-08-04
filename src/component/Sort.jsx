
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const { filter_products = [], setGridView, grid_view } = useFilterContext();
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
          className={grid_view ? " sort-btn" : "active sort-btn"}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">{filter_products.length} Products Available</div>
      <div className="sort-section">dropdown</div>
    </Wrapper>
  );
};

export default Sort;
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
