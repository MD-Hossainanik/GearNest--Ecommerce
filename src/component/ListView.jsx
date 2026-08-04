import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PageLoader from "../ui/PageLoader";
import { useProductContext } from "../context/ProductContext";
import { Button } from "@mui/material";
import { useState } from "react";

const ListView = ({ products }) => {
  const [expandedId, setExpandedId] = useState(null)
  const { isLoading } = useProductContext();

  if (isLoading) return <PageLoader />;

  return (
    <>
      <Wrapper className="section">
        <div className="container grid">
          {products?.map((product) => {
            const { id, title, category, price, thumbnail, description } =
              product;

            return (
              <NavLink
                to={`/singleproduct/${id}`}
                key={id}
                className="card-link"
              >
                <div className="card grid grid-two-column">
                  <figure>
                    <img src={thumbnail} alt={title} />
                    <figcaption className="caption">{category}</figcaption>
                  </figure>

                  <div className="card-data">
                    <div className="card-data-flex">
                      <h3>{title}</h3>
                      <p className="price">${price}</p>
                    </div>

                    {description && (
                      <p className="description">{expandedId===id ? description:`${description.slice(0, 150)}...`}
                        <Button onClick={(e) => {
                          e.preventDefault();
                          setExpandedId(expandedId===id? null : id)
                        }}>{expandedId===id ? "Read Less" : "Read Full"}</Button>
                      </p>
                    )}

                    <div className="btn-main">
                      <span>READ MORE</span>
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

export default ListView;

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
    gap: 2.4rem;
  }

  .card-link {
    text-decoration: none;
    display: block;
    color: inherit;
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.06);
    transition:
      transform 0.2s linear,
      box-shadow 0.2s linear;

    &:hover {
      transform: translateY(-0.3rem);
      box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.1);
    }
  }

  .grid-two-column {
    grid-template-columns: 24rem 1fr;
    align-items: stretch;
  }

  figure {
    width: 100%;
    height: 100%;
    min-height: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
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

  .card-data {
    padding: 2rem 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }

  .card-data-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  h3 {
    color: #1e2340;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.8rem;
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
    font-size: 1.6rem;
    white-space: nowrap;
    margin: 0;
    flex-shrink: 0;
  }

  .description {
    color: #6c757d;
    font-size: 1.4rem;
    line-height: 1.6;
    margin: 0 0 1.4rem 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .btn-main {
    align-self: flex-start;

    span {
      display: inline-block;
      padding: 0.9rem 1.8rem;
      font-size: 1.3rem;
      font-weight: 600;
      color: #6254f3;
      border: 0.1rem solid #6254f3;
      border-radius: 0.6rem;
      transition: all 0.2s linear;
      white-space: nowrap;
    }
  }

  .card:hover .btn-main span {
    background-color: #6254f3;
    color: #fff;
  }

  /* ---- Large Tablet / Small Laptop ---- */
  @media screen and (max-width: 1024px) {
    padding: 6rem 0;

    .grid-two-column {
      grid-template-columns: 20rem 1fr;
    }
  }

  /* ---- Tablet ---- */
  @media screen and (max-width: 768px) {
    .grid-two-column {
      grid-template-columns: 16rem 1fr;
    }

    figure {
      min-height: 16rem;
    }

    .card-data {
      padding: 1.6rem 1.8rem;
    }

    h3 {
      font-size: 1.6rem;
    }
  }

  /* ---- Mobile: stack image on top ---- */
  @media screen and (max-width: 576px) {
    padding: 4rem 0;

    .container {
      padding: 0 1.5rem;
    }

    .grid {
      gap: 1.8rem;
    }

    .grid-two-column {
      grid-template-columns: 1fr;
    }

    figure {
      height: 20rem;
      min-height: unset;
    }

    .card-data {
      padding: 1.6rem;
    }

    .card-data-flex {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4rem;
      margin-bottom: 0.8rem;
    }

    h3 {
      white-space: normal;
      font-size: 1.7rem;
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

    .card-data {
      padding: 1.4rem;
    }
  }
`;
