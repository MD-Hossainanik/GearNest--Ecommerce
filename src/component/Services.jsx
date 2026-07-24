import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div className="card-inner">
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div className="card-inner">
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div className="card-inner">
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div className="card-inner">
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0;

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  .grid {
    display: grid;
    gap: 2rem;
    width: 100%;
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .services-1,
  .services-2,
  .services-3 {
    width: 100%;
    box-sizing: border-box;
  }

  /* single big card style (col 1 & col 3) */
  .services-1,
  .services-3 {
    height: 100%;
    min-height: 13rem;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme?.colors?.bg || "#f4f4fa"};
    border-radius: 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    padding: 2rem;
  }

  /* middle column: two stacked small cards */
  .services-2 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: transparent;
    box-shadow: none;
    padding: 0;

    .services-colum-2 {
      flex: 1;
      display: flex;
      align-items: center;
      background: ${({ theme }) => theme?.colors?.bg || "#f4f4fa"};
      border-radius: 1.6rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      padding: 1.6rem 2rem;
    }
  }

  /* shared inner: icon + text side by side */
  .card-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
    text-align: left;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
    color: #1e1e2d;
  }

  .icon {
    flex-shrink: 0;
    width: 4.8rem;
    height: 4.8rem;
    padding: 1.2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }

  @media (max-width: 768px) {
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
