import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const ModalWrapper = styled.div`
  width: 40%;
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
`;

export const ModalTitle = styled.div`
  padding: 5px 10px;
  border-bottom: 2px solid green;
  font-size: 1.4rem;
`;

export const ModalContent = styled.div`
  padding: 10px;
  height: 70px;
`;

export const ModelButtonContainer = styled.div`
  gap: 10px;
  display: flex;
  justify-content: flex-end;
`;
