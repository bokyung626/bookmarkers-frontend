import React, { useEffect, useState } from "react";
import { BookSearch } from "../../components/specific/BookSearch/BookSearch";
import { Review } from "review";
import { PageContainer, SectionTitle } from "../../assets/styles/style";
import { RecommentBook } from "./RecommentBook";
import axios from "axios";
import { ReviewList } from "../../components/specific/ReviewList/ReviewList";
import { useNavigate } from "react-router-dom";

export const MainPage: React.FC = () => {
  const [currentReviews, setCurrentReviews] = useState<Review[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/review?page=1&limit=5`).then((res) => {
      setCurrentReviews(res.data);
    });
  }, []);

  return (
    <PageContainer>
      <BookSearch></BookSearch>
      <SectionTitle>
        <span>이 달의 추천도서</span>
      </SectionTitle>
      {/* <RecommentBook></RecommentBook> */}
      <SectionTitle>
        <span>최근에 올라온 독서노트</span>
        <button
          className="more"
          onClick={() => {
            navigate("/review");
          }}
        >
          {"더보기 >"}
        </button>
      </SectionTitle>
      <ReviewList reviews={currentReviews}></ReviewList>
    </PageContainer>
  );
};
