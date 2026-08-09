import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useCartContext } from "../context/cart_context";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCartContext();
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  let total_cart = 0;
  if (cart.length > 0) {
    total_cart = cart.reduce((total, item) => total + item.amount, 0);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainHeader className={scrolled ? "scrolled" : ""}>
      <NavLink to="/" className="logo-link" onClick={closeMenu}>
        <div className="logo">
          
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
              <NavLink
                to="/cart"
                className="navbar-link cart-trolley--link"
                onClick={closeMenu}
              >
                <span className="cart-icon-wrapper">
                  <FiShoppingCart className="cart-trolley" />
                  <span className="cart-total--item">{total_cart}</span>
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
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5rem;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.04);
  border-bottom: 0.1rem solid rgba(170, 170, 170, 0.15);
  transition:
    box-shadow 0.25s ease,
    background-color 0.25s ease;

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.96);
    box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.08);
  }

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
    box-shadow: 0 0.4rem 1rem rgba(108, 75, 255, 0.35);
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
    gap: 4rem;
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
        font-size: 1.5rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.02rem;
        color: ${({ theme }) => theme.colors.black};
        padding: 0.6rem 0;
        transition: color 0.25s ease;
      }

      &:link::after,
      &:visited::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0.2rem;
        border-radius: 0.2rem;
        background-color: ${({ theme }) => theme.colors.helper};
        transition: width 0.25s ease;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }

      &:hover::after,
      &:active::after {
        width: 100%;
      }
    }

    .cart-trolley--link {
      &:link::after,
      &:visited::after {
        display: none;
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
    z-index: 1100;
    transition: transform 0.2s ease;

    &:active {
      transform: scale(0.9);
    }
  }

  .mobile-nav-icon {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.black};
  }

  .cart-trolley--link {
    position: relative;
    z-index: 1;

    .cart-icon-wrapper {
      position: relative;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.04);
      overflow: visible;
      transition: background-color 0.2s ease;
    }

    &:hover .cart-icon-wrapper {
      background-color: rgba(0, 0, 0, 0.07);
    }

    .cart-trolley {
      position: relative;
      z-index: 1;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.black};
    }

    &:hover .cart-trolley {
      color: ${({ theme }) => theme.colors.black};
    }

    .cart-total--item {
      min-width: 2rem;
      height: 2rem;
      padding: 0 0.4rem;
      box-sizing: border-box;
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1;
      position: absolute;
      z-index: 2;
      color: #ffffff;
      background-color: #6254f3;
      border-radius: 5rem;
      display: grid;
      place-items: center;
      top: -0.5rem;
      right: -0.7rem;
      border: 0.2rem solid #fff;
      box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
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
      background-color: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(1.2rem);

      display: flex;
      justify-content: center;
      align-items: center;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition:
        transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.3s ease,
        visibility 0.4s ease;
    }

    .navbar.active {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 1050;
    }

    .navbar-lists {
      flex-direction: column;
      gap: 3.2rem;

      .navbar-link {
        &:link,
        &:visited {
          font-size: 2.4rem;
        }

        &:link::after,
        &:visited::after {
          height: 0.3rem;
          bottom: -0.4rem;
        }
      }
    }

    .cart-trolley--link {
      .cart-icon-wrapper {
        width: 5.2rem;
        height: 5.2rem;
      }

      .cart-trolley {
        font-size: 2.8rem;
      }

      .cart-total--item {
        min-width: 2.5rem;
        height: 2.5rem;
        font-size: 1.35rem;
        top: -0.4rem;
        right: -0.5rem;
      }
    }
  }
`;

export default NavBar;
