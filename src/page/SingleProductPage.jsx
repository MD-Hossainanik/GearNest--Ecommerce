import { useEffect, useState } from "react";
import { MdSecurity } from "react-icons/md";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import CartAmountToggle from "../component/CartAmountToggle";
import PageNavigation from "../component/PageNavigation";
import Star from "../component/Star";
import { useProductContext } from "../context/ProductContext";
import PageLoader from "../ui/PageLoader";
import { Button } from "./../ui/Button";
import NotFound from "./../ui/NotFound";

const SingleProductPage = () => {
  const { isSingleError, isSingleLoading, fetchSingleProduct, singleProduct } =
    useProductContext();
  const { id } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  useEffect(() => {
    if (singleProduct?.thumbnail) {
      setMainImage(singleProduct.thumbnail);
    }
  }, [singleProduct]);

  if (isSingleError) {
    return <NotFound />;
  }
  if (isSingleLoading) {
    return <PageLoader />;
  }

  const {
    title="",
    brand="",
    price=0,
    discountPercentage=0,
    description="",
    category="",
    availabilityStatus="",
    warrantyInformation="",
    shippingInformation="",
    returnPolicy="",
    rating=0,
    reviews=[],
    images=[],
    thumbnail="",
    minimumOrderQuantity=1,
    stock=0,
  } = singleProduct;

  const allImages = [
    ...(thumbnail ? [thumbnail] : []),
    ...(images || []).filter((img) => img !== thumbnail),
  ];

  const discountedPrice = price - (price * discountPercentage) / 100;

  //functions

  //Amount decrease function

  function amountdecrease() {
    setAmount((prev) => Math.max(prev - 1, 1));
  }
  const maxOrder = Math.min(stock, minimumOrderQuantity);
  //Amount increase function

  function amountincrease() {
    // amount < maxOrder && setAmount((prev) => prev + 1);
    if (minimumOrderQuantity > amount && stock > amount) {
      setAmount((prev)=>prev+1)
    }
  }

  

  return (
    <Wrapper className="section">
      <PageNavigation title={title} />

      <div className="container">
        <div className="grid-two-column">
          {/* ===== Product Images ===== */}
          <div className="product-images">
            <div className="main-image">
              <img src={mainImage} alt={title} />
            </div>

            <div className="thumbnail-images">
              {allImages?.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${mainImage === img ? "active" : ""}`}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} alt={`${title}-${index}`} />
                </div>
              ))}
            </div>
          </div>

          {/* ===== Product Data ===== */}
          <div className="product-data">
            <h2>{title}</h2>

            <Star rating={rating} reviews={reviews} />

            <div className="product-data-price">
              <del>${price}</del>
              <span>${discountedPrice.toFixed(2)}</span>
            </div>

            <span className="product-data-discount">
              {discountPercentage}% OFF
            </span>

            <p className="product-data-description">{description}</p>

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>{shippingInformation}</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>{returnPolicy}</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>{warrantyInformation}</p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Availability:{" "}
                <span>
                  {availabilityStatus === "In Stock"
                    ? "In Stock"
                    : "Out of Stock"}
                </span>
              </p>
              <p>
                Brand: <span>{brand}</span>
              </p>
              <p>
                Category: <span>{category}</span>
              </p>
              <p>
                ID: <span>{id}</span>
              </p>
              <p>
                Max-Order: <span>{maxOrder}</span>
              </p>
            </div>
            <hr />
            {/* add to card */}
            <CartAmountToggle
              amount={amount}
              amountdecrease={amountdecrease}
              amountincrease={amountincrease}
              maxOrder={maxOrder}
            />
            {/* Add to cart Button */}
            <NavLink to="/cart">
              <Button disabled={stock === 0} className="btn">
                Add to Cart
              </Button>
            </NavLink>
          </div>
        </div>

        {/* ===== Reviews ===== */}
        <div className="product-reviews">
          <h3>Customer Reviews</h3>
          <div className="grid-three-column">
            {reviews?.map((review) => (
              <div className="review-card" key={review.reviewerEmail}>
                <p className="review-rating">⭐ {review.rating}</p>
                <p className="review-comment">{review.comment}</p>
                <p className="review-name">- {review.reviewerName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductPage;

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid-two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .grid-three-column {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  /* ========== Image Gallery ========== */
  .product-images {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: sticky;
    top: 9rem;

    .main-image {
      width: 100%;
      background: #fff;
      border-radius: 1.2rem;
      overflow: hidden;
      box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.06);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 35rem;

      img {
        width: 100%;
        max-width: 42rem;
        max-height: 42rem;
        object-fit: contain;
        transition: transform 0.3s ease;
      }
    }

    .thumbnail-images {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: flex-start;

      .thumbnail {
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 0.8rem;
        overflow: hidden;
        cursor: pointer;
        border: 2px solid transparent;
        background: #fff;
        box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.08);
        transition: all 0.25s ease;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &:hover {
          border-color: #a99ef5;
          transform: translateY(-2px);
        }

        &.active {
          border-color: #6254f3;
          box-shadow: 0 0 0 2px rgba(98, 84, 243, 0.25);
        }
      }
    }
  }

  /* ========== Product Data ========== */
  .product-data {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    min-width: 0;

    h2 {
      font-size: 2.8rem;
      color: #1e2340;
      text-transform: capitalize;
      word-break: break-word;
    }

    .product-data-rating {
      font-size: 1.5rem;
      color: #6254f3;
    }

    .product-data-price {
      display: flex;
      align-items: baseline;
      gap: 1rem;
      flex-wrap: wrap;

      del {
        font-size: 1.6rem;
        color: #999;
      }

      span {
        font-size: 2.4rem;
        font-weight: 600;
        color: #6254f3;
      }
    }

    .product-data-discount {
      display: inline-block;
      width: fit-content;
      background-color: #e6f8ec;
      color: #1a9c4a;
      font-size: 1.3rem;
      font-weight: 600;
      padding: 0.3rem 1rem;
      border-radius: 2rem;
    }

    .product-data-description {
      font-size: 1.5rem;
      color: #555;
      line-height: 1.6;
    }

    .product-data-warranty {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 1.5rem;
      border-top: 0.1rem solid #ccc;
      border-bottom: 0.1rem solid #ccc;
      padding: 1.5rem 0;
      margin: 1rem 0;

      .product-warranty-data {
        text-align: center;
        flex: 1 1 8rem;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }

        p {
          font-size: 1.2rem;
          padding-top: 0.4rem;
          word-break: break-word;
        }
      }
    }

    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      font-size: 1.6rem;
      text-transform: capitalize;

      span {
        font-weight: 600;
      }

      .out-of-stock {
        color: #d64545;
      }
    }
  }

  /* ========== Reviews ========== */
  .product-reviews {
    margin-top: 5rem;

    h3 {
      font-size: 2.2rem;
      color: #1e2340;
      margin-bottom: 2rem;
    }

    .review-card {
      background-color: #fff;
      border-radius: 1rem;
      padding: 1.5rem 2rem;
      box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.06);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-0.5rem);
        box-shadow: 0 0.8rem 2rem rgba(98, 84, 243, 0.15);
        border: 1px solid rgba(98, 84, 243, 0.2);
      }

      .review-rating {
        color: #6254f3;
        font-weight: 600;
      }

      .review-comment {
        font-size: 1.4rem;
        color: #444;
        margin: 0.8rem 0;
      }

      .review-name {
        font-size: 1.3rem;
        color: #888;
      }
    }
  }

  /* ---- Tablet ---- */
  @media screen and (max-width: 1024px) {
    padding: 6rem 0;

    .grid-two-column {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .grid-three-column {
      grid-template-columns: repeat(2, 1fr);
    }

    .product-images {
      position: static;
    }
  }

  /* ---- Mobile ---- */
  @media screen and (max-width: 600px) {
    padding: 4rem 0;

    .container {
      padding: 0 1.5rem;
    }

    .grid-three-column {
      grid-template-columns: 1fr;
    }

    .product-data h2 {
      font-size: 2.2rem;
    }

    .product-data-warranty {
      justify-content: center;
    }

    .product-images {
      .main-image {
        min-height: 28rem;

        img {
          max-height: 30rem;
        }
      }

      .thumbnail-images .thumbnail {
        width: 6rem;
        height: 6rem;
      }
    }
  }
`;
