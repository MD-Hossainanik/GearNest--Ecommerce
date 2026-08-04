import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdHome } from "react-icons/md";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <div className="container">
        <NavLink to="/" className="home-link">
          <MdHome className="home-icon" />
          Home
        </NavLink>
        <MdKeyboardArrowRight className="icon" />
        <span className="current">{title}</span>
      </div>
    </Wrapper>
  );
};

export default PageNavigation;

const Wrapper = styled.section`
  height: 6rem;
  background-color: #f8f8fb;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;

  .container {
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .home-link {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.5rem;
    color: #6254f3;
    font-weight: 600;
    text-decoration: none;
    text-transform: capitalize;
    padding: 0.4rem 0.8rem;
    border-radius: 0.6rem;
    transition: all 0.25s ease;

    .home-icon {
      font-size: 1.7rem;
    }

    &:hover {
      background-color: rgba(98, 84, 243, 0.1);
      color: #4a3fd1;
    }
  }

  .icon {
    font-size: 1.8rem;
    color: #c4c4c4;
  }

  .current {
    font-size: 1.5rem;
    color: #555;
    font-weight: 500;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40rem;
  }

  @media screen and (max-width: 600px) {
    height: 5rem;

    .container {
      padding: 0 1.5rem;
    }

    .home-link,
    .current {
      font-size: 1.3rem;
    }

    .current {
      max-width: 20rem;
    }
  }
`;
