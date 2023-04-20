import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";

export const StyledFormUpdateUser = styled.form`
  width: 100%;
  background-color: var(--colors-whiteFixed);
  border-radius: 8px;

  textarea {
    width: 100%;
  }

  .divHeader {
    height: 56px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .formContent {
    margin-top: 37px;
    padding: 0 25px;
  }
  .divInputs {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 24px 0 50px 0;
  }

  .divButton {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 16px;
    margin-bottom: 32px;

    button {
      width: max-content;
      padding: 0 15px;
    }
  }

  @media (min-width: 620px) {
    min-width: 500px;
  }

  .error {
    font-size: 0.875rem;
    color: var(--colors-alert-1);
  }
`;

export const CloseIcon = styled(IoCloseOutline)`
  height: 25px;
  width: 25px;
  cursor: pointer;
  color: var(--colors-grey-4);

  @media (min-width: 768px) {
    width: max-content;
  }
`;
