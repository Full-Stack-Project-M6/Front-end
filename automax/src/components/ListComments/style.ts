import styled from "styled-components";

export const StyleComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 44px;

  .divUser {
    display: flex;
    align-items: center;
    gap: 25px;

    .date {
      font-size: 0.75rem;
      color: var(--color-grey-3);
    }
  }

  .comment {
    width: 100%;

    p {
      line-height: 24px;
    }
  }
`;
