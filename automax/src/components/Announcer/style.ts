import styled from "styled-components";

export const StyledAnnouncer = styled.div`
  .divAnnouncer {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    .divTagAnnouncer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 30px;
      background-color: var(--colors-brand-1);
      p {
        color: var(--colors-whiteFixed);
      }
    }
  }
`;
