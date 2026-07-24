import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { TbSettings } from "react-icons/tb";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <MainHeader>
      <NavLink to="/" className="logo-link" onClick={closeMenu}>
        <div className="logo">
          <span className="logo-icon">
            <TbSettings />
          </span>
          <span className="logo-text">
            Gear<span className="highlight">Nest</span>
          </span>
        </div>
      </NavLink>

      <Nav>
        <button
          className="mobile-navbar-btn"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <HiOutlineX className="mobile-nav-icon" />
          ) : (
            <HiOutlineMenu className="mobile-nav-icon" />
          )}
        </button>

        <div className={`navbar ${isOpen ? "active" : ""}`}>
          <ul className="navbar-lists">
            <li>
              <NavLink to="/" className="navbar-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navbar-link" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="navbar-link"
                onClick={closeMenu}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="navbar-link"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="navbar-link" onClick={closeMenu}>
                <span className="cart-icon-wrapper">
                  <FiShoppingCart className="cart-trolley" />
                  <span className="cart-total--item">10</span>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.bg};
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5rem;

  .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: transform 0.25s ease;
  }

  .logo:hover {
    transform: scale(1.03);
  }

  .logo-icon {
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.helper},
      #6c4bff
    );
    color: #fff;
    font-size: 2.2rem;
    flex-shrink: 0;
  }

  .logo-text {
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.colors.black};
  }

  .logo-text .highlight {
    color: ${({ theme }) => theme.colors.helper};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 70px;
    padding: 0 2rem;

    .logo-icon {
      width: 3.4rem;
      height: 3.4rem;
      font-size: 1.8rem;
    }

    .logo-text {
      font-size: 1.9rem;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        font-size: 1.6rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.25s ease;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
    z-index: 1100;
  }

  .mobile-nav-icon {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.black};
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 2.6rem;
    }

    .cart-total--item {
      width: 1.8rem;
      height: 1.8rem;
      font-size: 1.1rem;
      position: absolute;
      color: #fff;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -0.6rem;
      right: -0.8rem;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-flex;
    }

    .navbar {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.35s ease;
    }

    .navbar.active {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 1050;
    }

    .navbar-lists {
      flex-direction: column;
      gap: 3.6rem;

      .navbar-link {
        &:link,
        &:visited {
          font-size: 2.6rem;
        }
      }
    }

    .cart-trolley--link {
      .cart-trolley {
        font-size: 3.4rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        font-size: 1.3rem;
        top: -0.8rem;
        right: -1rem;
      }
    }
  }
`;

export default NavBar;
