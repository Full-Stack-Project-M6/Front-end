import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";

export const StyledFormUpdateAnnounce = styled.form`
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

    .divTwoInputs {
      display: flex;
      justify-content: space-between;
    }

    .divButtonPublish {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      margin-top: 18px;

      button {
        width: 100%;
      }
    }

    .divAddImg {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      p {
        color: var(--colors-brand-1);
      }
    }
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
