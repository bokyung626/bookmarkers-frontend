import React from "react";
import * as S from "./style";
import { Review } from "review";
import textSlicer from "../../../utils/textSlicer";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../common/User/Avatar";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const navigate = useNavigate();

  const onClickCardHandler = (postId: string) => {
    navigate(`/review/${postId}`);
  };

  return (
    <S.CardLayout
      key={review.id}
      onClick={() => {
        onClickCardHandler(review.id);
      }}
    >
      <S.ImageContainer>
        <S.CardImage src={review.image} alt="" />
      </S.ImageContainer>
      <S.CardContent>
        <h4>{textSlicer(review.title, 15)}</h4>
        <p className="post-content">{textSlicer(review.content, 30)}</p>
        <p className="post-day">
          {dayjs(review.createdAt).format("YYYY-MM-DD")}
        </p>
        <S.UserBox>
          <Avatar url={review.user.profileImage} size={28}></Avatar>
          <p className="nickname">{review.user.nickname}</p>
        </S.UserBox>
      </S.CardContent>
    </S.CardLayout>
  );
};
