import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../context/ProductContext";
import NotFound from "../ui/NotFound";
import PageLoader from "../ui/PageLoader";

const FeatureProductPage = () => {
  const { tags } = useParams();

  const { products, isLoading, isError } = useProductContext();

  if (isError) {
    return <NotFound />;
  }

  if (isLoading) {
    return <PageLoader />;
  }

  const productsTags = tags
    ? products.filter((items) => {
        return items.tags.some((tag) =>
          tag.toLowerCase().includes(tags.toLowerCase()),
        );
      })
    : products;
  return (
    <Wrapper className="section">
      <div className="container">
        <div className="grid grid-three-column">
          {productsTags.map((product) => {
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
      </div>
    </Wrapper>
  );
};

export default FeatureProductPage;

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
  }

  .grid-three-column {
    display: grid;
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
    background-color: #fff;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.06);
    transition: transform 0.2s linear;

    &:hover {
      transform: translateY(-0.4rem);
    }

    .card-data {
      padding: 1.5rem 2rem;
    }

    .card-data-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
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
    }

    .price {
      color: #6254f3;
      font-weight: 600;
      font-size: 1.5rem;
      white-space: nowrap;
      margin: 0;
    }
  }

  /* ---- Tablet ---- */
  @media screen and (max-width: 1024px) {
    padding: 6rem 0;

    .grid-three-column {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  /* ---- Mobile ---- */
  @media screen and (max-width: 600px) {
    padding: 4rem 0;

    .grid-three-column {
      grid-template-columns: repeat(1, 1fr);
      gap: 1.6rem;
    }

    figure {
      height: 20rem;
    }
  }
`;
