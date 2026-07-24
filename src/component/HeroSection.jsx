import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HeroImage from "../assets/img/Screenshot (66).png";
import { Button } from "../ui/Button";

const HeroSection = ({ name }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>

            <h1>{name}</h1>

            <p className="hero-description">
              Discover premium phones, smart watches, belts, and lifestyle
              accessories at unbeatable prices. Shop the latest trends with fast
              delivery and secure checkout.
            </p>

            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>

          <div className="hero-section-image">
            <figure>
              <img src={HeroImage} alt="GearNest Hero" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid-two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 8rem;
  }

  .hero-section-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .intro-data {
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.colors.helper};
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 5.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 2rem;
  }

  .hero-description {
    font-size: 1.8rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 3rem;
    max-width: 55rem;
  }

  .hero-section-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;
  }

  figure::after {
    content: "";
    position: absolute;
    width: 25rem;
    height: 25rem;
    background: ${({ theme }) => theme.colors.helper};
    opacity: 0.12;
    border-radius: 50%;
    top: -2rem;
    right: -2rem;
    z-index: -1;
  }

  .img-style {
    width: 100%;
    max-width: 45rem;
    height: auto;
    object-fit: contain;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column {
      grid-template-columns: 1fr;
      gap: 5rem;
    }

    .hero-section-data {
      text-align: center;
      align-items: center;
      order: 2;
    }

    .hero-section-image {
      order: 1;
    }

    h1 {
      font-size: 4rem;
    }

    .img-style {
      max-width: 32rem;
    }
  }
`;

export default HeroSection;
