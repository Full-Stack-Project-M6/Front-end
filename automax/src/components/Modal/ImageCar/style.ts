import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

export const ModalContentImageCar = styled.div`
  padding: 18px 30px 30px 30px;
`;

export const ModalImgCar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border-radius: 4px;
  background-color: var(--colors-grey-4);
  img {
    max-width: 80%;
  }
`;

export const ModalClose = styled.button`
  display: flex;
  justify-content: flex-start;
  border: none;
`;

export const CloseIcon = styled(IoCloseOutline)`
  height: 25px;
  width: 25px;
  cursor: pointer;
  color: var(--colors-grey-4);
`;

export const ModalHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
