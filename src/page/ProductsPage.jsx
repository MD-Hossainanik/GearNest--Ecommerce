import styled from "styled-components";
import ProductList from "../component/ProductList";
import FilterSection from "./../component/FilterSection";
import Sort from "./../component/Sort";

const ProductsPage = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div className="filter-side">
          <FilterSection />
        </div>

        <section className="product-view-sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default ProductsPage;

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    max-width: 130rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
  }

  .grid-filter-column {
    grid-template-columns: 26rem 1fr;
    gap: 3rem;
    align-items: start;
  }

  .filter-side {
    position: sticky;
    top: 2rem;
  }

  .product-view-sort {
    min-width: 0;

    .sort-filter {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 2.4rem;
    }

    .main-product {
      min-width: 0;
    }
  }

  /* ---- Large Tablet / Small Laptop ---- */
  @media (max-width: 1024px) {
    .grid-filter-column {
      grid-template-columns: 22rem 1fr;
      gap: 2rem;
    }
  }

  /* ---- Tablet: filter goes on top, full width ---- */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 6rem 0 4rem 0;

    .grid-filter-column {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .filter-side {
      position: static;
    }
  }

  /* ---- Mobile ---- */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 4rem 0 3rem 0;

    .container {
      padding: 0 1.5rem;
    }

    .grid-filter-column {
      gap: 1.6rem;
    }

    .product-view-sort .sort-filter {
      justify-content: flex-start;
      margin-bottom: 1.8rem;
    }
  }
`;
