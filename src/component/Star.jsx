import { Rating } from "@mui/material";
import styled from "styled-components";

const Star = ({ rating=0, reviews=[] }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  return (
    <Wrapper>
      <Rating
        name="half-rating-read"
        value={roundedRating}
        
        precision={0.5}
        readOnly
      />
      <p className="rating-text"> {rating.toFixed(1)} Rating </p>
      <p className="rating-text"> {reviews?.length} Reviews </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .stars {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  .star-icon {
    font-size: 1.7rem;
    transition: transform 0.2s ease;

    &.filled {
      color: #ffb703;
    }

    &.empty {
      color: #d9d9d9;
    }
  }

  .rating-text {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    .review-count {
      font-size: 1.3rem;
      font-weight: 400;
      color: #888;
    }
  }

  &:hover .star-icon.filled {
    transform: scale(1.08);
  }
`;

export default Star;
