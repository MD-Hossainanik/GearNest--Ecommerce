import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./../ui/Button";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { TbSettings } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <Wrapper>
      <div className="contact-short">
        <span className="eyebrow">// LET&apos;S TALK</span>
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to gear up?</h3>
            <p>Tell us what you need — we&apos;ll sort the rest.</p>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </div>

      <footer>
        <div className="hazard-strip" aria-hidden="true" />

        <div className="container grid grid-four-column footer-main">
          <div className="footer-about">
            <div className="brand-mark">
              <TbSettings className="brand-icon" />
              <span>GearNest</span>
            </div>
            <p>
              Gear that keeps up. Built for the grind, backed for the long run.
            </p>
            <div className="footer-social--icons">
              <a href="#" aria-label="Discord">
                <FaDiscord className="icons" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="icons" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Shop</h3>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Need a hand?</h3>
            <ul>
              <li>
                <span className="label">Email</span>
                <a href="mailto:hello@gearnest.com">hello@gearnest.com</a>
              </li>
              <li>
                <span className="label">Phone</span>
                <a href="tel:+15550102938">+1 (555) 010-2938</a>
              </li>
              <li>
                <span className="label">Hours</span>
                <span>Mon–Fri, 9am–6pm</span>
              </li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h3>Get the drop first</h3>
            <p className="subscribe-text">
              New arrivals and restock alerts. No spam, unsubscribe anytime.
            </p>
            <form action="#" className="subscribe-form">
              <input type="email" placeholder="your e-mail" required />
              <button type="submit" aria-label="Subscribe">
                <FiArrowRight />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom--section">
          <div className="mini-hazard" aria-hidden="true" />
          <div className="container grid grid-two-column">
            <p>
              &copy; {new Date().getFullYear()} GearNest. All Rights Reserved
            </p>
            <div className="footer-bottom--links">
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms &amp; Conditions</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  --footer-bg: ${({ theme }) => theme.colors.footer_bg};
  --footer-surface: #111b41;
  --footer-border: rgba(255, 255, 255, 0.09);
  --text-primary: #edeffb;
  --text-muted: #8890b8;
  --accent: ${({ theme }) => theme.colors.btn};
  --accent-warm: #ffb020;

  /* ---------- Floating contact card ---------- */
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3.6rem 6rem;
    background-color: #fff;
    border-radius: 1.2rem;
    border-top: 4px solid var(--accent-warm);
    box-shadow: 0 25px 50px rgba(10, 20, 53, 0.18);
    transform: translateY(50%);
    position: relative;
    z-index: 2;

    .eyebrow {
      display: block;
      font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
      font-size: 1.2rem;
      letter-spacing: 0.12em;
      color: var(--accent);
      margin-bottom: 1.2rem;
    }

    h3 {
      font-size: 2.4rem;
      line-height: 1.35;
      color: #14152b;
      margin: 0 0 0.6rem 0;
    }

    p {
      color: #5b5d78;
      font-size: 1.5rem;
      margin: 0;
    }

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  /* ---------- Main footer ---------- */
  footer {
    padding: 15rem 0 4rem 0;
    background-color: var(--footer-bg);
    position: relative;
    overflow: hidden;
  }

  .hazard-strip {
    height: 6px;
    width: 100%;
    background-image: repeating-linear-gradient(
      135deg,
      var(--accent-warm) 0 12px,
      var(--footer-bg) 12px 24px
    );
  }

  .footer-main {
    grid-template-columns: repeat(5, 1fr);
    padding-top: 5.5rem;
    gap: 4rem;
    align-items: start;
  }

  .footer-about {
    grid-column: span 2;
  }

  footer h3 {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 0 0 1.8rem 0;
    position: relative;
  }

  footer h3::after {
    content: "";
    display: block;
    width: 3.2rem;
    height: 3px;
    margin-top: 0.9rem;
    background-image: repeating-linear-gradient(
      135deg,
      var(--accent-warm) 0 4px,
      transparent 4px 8px
    );
  }

  footer p {
    color: var(--text-muted);
    font-size: 1.45rem;
    line-height: 1.7;
    margin: 0;
  }

  /* ---------- Brand column ---------- */
  .brand-mark {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    margin-bottom: 1.4rem;

    span {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.3px;
    }

    .brand-icon {
      width: 3.4rem;
      height: 3.4rem;
      padding: 0.7rem;
      border-radius: 50%;
      background-color: var(--accent);
      color: #fff;
      font-size: 2rem;
      flex-shrink: 0;
    }
  }

  .footer-about p {
    max-width: 38rem;
    margin-bottom: 2.2rem;
  }

  .footer-social--icons {
    display: flex;
    gap: 1.4rem;

    a {
      width: 4rem;
      height: 4rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
      border: 1.5px solid var(--footer-border);
      transition:
        background-color 0.25s ease,
        border-color 0.25s ease,
        transform 0.25s ease;

      .icons {
        color: var(--text-primary);
        font-size: 1.8rem;
      }

      &:hover {
        background-color: var(--accent);
        border-color: var(--accent);
        transform: translateY(-3px);
      }

      &:focus-visible {
        outline: 2px solid var(--accent-warm);
        outline-offset: 2px;
      }
    }
  }

  /* ---------- Shop links ---------- */
  .footer-links ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .footer-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 1.5rem;
    transition:
      color 0.2s ease,
      padding-left 0.2s ease;

    &:hover {
      color: var(--text-primary);
      padding-left: 0.4rem;
    }

    &:focus-visible {
      outline: 2px solid var(--accent-warm);
      outline-offset: 3px;
    }
  }

  /* ---------- Contact column ---------- */
  .footer-contact ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .footer-contact li {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .footer-contact .label {
    font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    color: var(--accent-warm);
    text-transform: uppercase;
  }

  .footer-contact a,
  .footer-contact span:not(.label) {
    color: var(--text-muted);
    font-size: 1.5rem;
    text-decoration: none;
  }

  .footer-contact a:hover {
    color: var(--text-primary);
  }

  /* ---------- Subscribe column ---------- */
  .footer-subscribe .subscribe-text {
    margin-bottom: 1.8rem;
  }

  .subscribe-form {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    border-radius: 999px;
    border: 1.5px solid var(--footer-border);
    background-color: var(--footer-surface);
    padding: 0.5rem 0.5rem 0.5rem 1.8rem;
    transition: border-color 0.2s ease;

    &:focus-within {
      border-color: var(--accent);
    }
  }

  .subscribe-form input[type="email"] {
    flex: 1;
    min-width: 0;
    padding: 1rem 0;
    border: none;
    background: transparent;
    color: var(--text-primary);
    font-size: 1.4rem;
    outline: none;
    appearance: none;
    -webkit-appearance: none;

    &::placeholder {
      color: var(--text-muted);
    }
  }

  .subscribe-form button {
    flex-shrink: 0;
    width: 3.8rem;
    height: 3.8rem;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background-color: var(--accent);
    color: #fff;
    font-size: 1.7rem;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;

    &:hover {
      opacity: 0.88;
      transform: translateX(2px);
    }

    &:focus-visible {
      outline: 2px solid var(--accent-warm);
      outline-offset: 2px;
    }
  }

  /* ---------- Bottom bar ---------- */
  .footer-bottom--section {
    padding-top: 5.5rem;

    .mini-hazard {
      height: 2px;
      width: 100%;
      margin-bottom: 2.4rem;
      background-image: repeating-linear-gradient(
        135deg,
        var(--footer-border) 0 10px,
        transparent 10px 20px
      );
    }

    .grid-two-column {
      align-items: center;
    }

    p {
      color: var(--text-muted);
      font-size: 1.3rem;
    }

    .footer-bottom--links {
      display: flex;
      justify-self: end;
      gap: 2.4rem;

      a {
        color: var(--text-muted);
        text-decoration: none;
        font-size: 1.3rem;
        letter-spacing: 0.03em;
        transition: color 0.2s ease;

        &:hover {
          color: var(--text-primary);
        }

        &:focus-visible {
          outline: 2px solid var(--accent-warm);
          outline-offset: 3px;
        }
      }
    }
  }

  /* ---------- Responsive ---------- */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    footer .footer-main {
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem 2.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 86vw;
      margin: 4.8rem auto;
      padding: 3rem 2.4rem;
      transform: translateY(0%);
      text-align: center;

      .eyebrow {
        text-align: center;
      }

      .grid div:last-child {
        justify-self: center;
        margin-top: 2rem;
      }
    }

    footer {
      padding: 5.5rem 0 3.5rem 0;
    }

    .footer-main {
      grid-template-columns: 1fr;
      gap: 4rem;
      text-align: center;
    }

    .footer-about {
      grid-column: auto;
    }

    footer h3::after {
      margin-inline: auto;
    }

    .brand-mark {
      justify-content: center;
    }

    .footer-about p {
      max-width: 100%;
      margin-inline: auto;
    }

    .footer-social--icons {
      justify-content: center;
    }

    .footer-contact li {
      align-items: center;
    }

    .footer-bottom--section {
      padding-top: 4rem;

      .grid-two-column {
        grid-template-columns: 1fr;
        gap: 1.6rem;
        text-align: center;
      }

      .footer-bottom--links {
        justify-self: center;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
    }
  }
`;

export default Footer;
