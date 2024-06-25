import React, { useState, useEffect } from "react";
import { PageContainer, SectionTitle } from "../../assets/styles/style";
import { ReviewList } from "../../components/specific/ReviewList/ReviewList";
import axios from "axios";
import { ReviewSearch } from "../../components/specific/ReviewSearch/ReviewSearch";
import { Review } from "../../types/review";

export const ReviewMainPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    axios.get(`/review`).then((res) => {
      setReviews(res.data);
    });
  }, []);

  const onSearch = (search: string) => {
    axios.get(`/review?${search}`).then((res) => {
      setReviews(res.data);
    });

    setReviews(reviews);
  };

  return (
    <PageContainer>
      <ReviewSearch onSearch={onSearch} />
      {reviews.length > 0 ? (
        <ReviewList reviews={reviews} />
      ) : (
        <SectionTitle>
          <span>독서노트가 없습니다.</span>
        </SectionTitle>
      )}
    </PageContainer>
  );
};
