import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";

export const StyledFormCreateAnnounce = styled.form`
  width: 100%;
  background-color: var(--colors-whiteFixed);
  border-radius: 0.5rem;

  textarea {
    width: 100%;
  }

  .divHeader {
    height: 3.5rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .formContent {
    margin-top: 2.3125rem;
    padding: 0 1.5625rem;
  }
  .divInputs {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 1.5rem 0 3.125rem 0;

    .divTwoInputs {
      display: flex;
      justify-content: space-between;
      //Adicionado por Fernando para fazer a responsividade
      width: 100%;
    }
    //Adicionado por Fernando para fazer a responsividade
    .divTwoInputs > div {
      width: 50%;
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
    padding: 0 1rem;
    margin-bottom: 2rem;

    button {
      width: max-content;
      padding: 0 0.9375rem;
    }
  }

  .error {
    font-size: 0.875rem;
    color: var(--colors-alert-1);
  }
`;

export const CloseIcon = styled(IoCloseOutline)`
  height: 1.5625rem;
  width: 1.5625rem;
  cursor: pointer;
  color: var(--colors-grey-4);

  @media (min-width: 48rem) {
    width: max-content;
  }
`;
