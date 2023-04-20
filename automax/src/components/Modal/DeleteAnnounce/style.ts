import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";

export const StyleModalDeleteAnnounce = styled.div`
  padding: 0 24px 25px 24px;

  .divHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    margin-bottom: 25px;
  }

  .divConfirm {
    margin-bottom: 25px;
  }

  .divText {
    margin-bottom: 43px;
  }

  .divButton {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 30px;

    button {
      width: max-content;
    }
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
