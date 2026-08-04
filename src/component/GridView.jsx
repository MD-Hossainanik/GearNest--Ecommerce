import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PageLoader from "../ui/PageLoader";
import { useProductContext } from "../context/ProductContext";

const GridView = ({ products }) => {
  const { isLoading } = useProductContext();

  if (isLoading) return <PageLoader />;

  return (
    <>
      <Wrapper className="section">
        <div className="container grid grid-three-column">
          {products?.map((product) => {
            const { id, title, category, price, thumbnail } = product;

            return (
              <NavLink
                to={`/singleproduct/${id}`}
                key={id}
                className="card-link"
              >
                <div className="card">
                  <figure>
                    <img src={thumbnail} alt={title} />
                    <figcaption className="caption">{category}</figcaption>
                  </figure>

                  <div className="card-data">
                    <div className="card-data-flex">
                      <h3>{title}</h3>
                      <p className="price">${price}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default GridView;

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .card-link {
    text-decoration: none;
    display: block;
    color: inherit;
    height: 100%;
  }

  .grid {
    display: grid;
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  figure {
    width: 100%;
    height: 22rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 1rem 1rem 0 0;
    background-color: #f8f8fa;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.05);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      padding: 1.5rem;
      transition: all 0.3s linear;
    }
    .caption {
      position: absolute;
      top: 1.2rem;
      right: 1.2rem;
      max-width: calc(100% - 2.4rem);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      background-color: #fff;
      color: #6254f3;
      padding: 0.6rem 1.4rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 2rem;
      z-index: 2;
      box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.1);
    }
  }

  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.06);
    transition:
      transform 0.2s linear,
      box-shadow 0.2s linear;

    &:hover {
      transform: translateY(-0.4rem);
      box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.1);
    }

    .card-data {
      padding: 1.5rem 2rem;
    }

    .card-data-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    h3 {
      color: #1e2340;
      text-transform: capitalize;
      font-weight: 500;
      font-size: 1.6rem;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      min-width: 0;
    }

    .price {
      color: #6254f3;
      font-weight: 600;
      font-size: 1.5rem;
      white-space: nowrap;
      margin: 0;
      flex-shrink: 0;
    }
  }

  /* ---- Large Tablet / Small Laptop ---- */
  @media screen and (max-width: 1024px) {
    padding: 6rem 0;

    .grid-three-column {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  /* ---- Tablet ---- */
  @media screen and (max-width: 768px) {
    .grid-three-column {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
    }

    figure {
      height: 18rem;
    }
  }

  /* ---- Mobile ---- */
  @media screen and (max-width: 576px) {
    padding: 4rem 0;

    .container {
      padding: 0 1.5rem;
    }

    .grid-three-column {
      grid-template-columns: 1fr;
      gap: 1.6rem;
    }

    figure {
      height: 20rem;
    }
  }

  /* ---- Small Mobile ---- */
  @media screen and (max-width: 360px) {
    .container {
      padding: 0 1rem;
    }

    figure {
      height: 18rem;
    }

    .card .card-data {
      padding: 1.2rem 1.5rem;
    }
  }
`;
