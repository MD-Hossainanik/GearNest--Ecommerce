import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from 'react-router-dom';



const NoProductFound = () => {
  return (
    <Wrapper>
      <h3>No Product Found</h3>

      <NavLink to="/products">
        <Button>Product page</Button>
      </NavLink>
    </Wrapper>
  );
};

export default NoProductFound;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 3rem;
  background-color: #fff;
  border: 0.1rem solid rgb(170 170 170 / 25%);
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 0.8rem rgb(0 0 0 / 4%);

  .icon-circle {
    width: 7.2rem;
    height: 7.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #f1f1f4;
    margin-bottom: 2rem;

    .icon {
      font-size: 2.8rem;
      color: #9b9ba3;
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    color: #1e2340;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    color: #6c757d;
    line-height: 1.7;
    max-width: 40rem;
    margin: 0;
  }

  .clear-btn {
    margin-top: 2.4rem;

    button {
      padding: 1rem 2.4rem;
      font-size: 1.4rem;
      font-weight: 600;
      color: #fff;
      background-color: #1e2340;
      border: 0.1rem solid #1e2340;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        background-color: #fff;
        color: #1e2340;
      }
    }
  }

  /* ================= Tablet ================= */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 5rem 2.4rem;

    .icon-circle {
      width: 6.4rem;
      height: 6.4rem;
      margin-bottom: 1.6rem;

      .icon {
        font-size: 2.4rem;
      }
    }

    h3 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.35rem;
    }
  }

  /* ================= Mobile ================= */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 4rem 1.8rem;
    border-radius: 0.6rem;

    .icon-circle {
      width: 5.6rem;
      height: 5.6rem;
      margin-bottom: 1.4rem;

      .icon {
        font-size: 2rem;
      }
    }

    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.3rem;
    }

    .clear-btn {
      margin-top: 2rem;
      width: 100%;

      button {
        width: 100%;
        padding: 0.9rem;
      }
    }
  }
`;
