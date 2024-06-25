import React from "react";
import * as S from "./style";
import { Review } from "../../../types/review";
import { ReviewCard } from "./ReviewCard";

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <S.CardContainer>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review}></ReviewCard>
      ))}
    </S.CardContainer>
  );
};
