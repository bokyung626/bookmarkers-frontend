import React, { Children, useEffect } from "react";
import * as Styled from "./style";

interface ModalProps {
  active: boolean;
  //   onEventHandler: () => {};
  onClose: () => void;
  title: string;
  content: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  active,
  onClose,
  title,
  content,
  children,
}) => {
  useEffect(() => {
    // 뒷배경 움직임 방지
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [active]);

  return (
    <Styled.ModalContainer onClick={onClose}>
      <Styled.ModalWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Styled.ModalTitle>{title}</Styled.ModalTitle>
        <Styled.ModalContent>{content}</Styled.ModalContent>
        <Styled.ModelButtonContainer>{children}</Styled.ModelButtonContainer>
      </Styled.ModalWrapper>
    </Styled.ModalContainer>
  );
};
