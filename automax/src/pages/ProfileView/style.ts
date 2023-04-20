import styled from "styled-components";

export const StyledShopWindow = styled.section`
    padding: 0 60px;

    & > ul{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .pagination{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 100px 0 60px 0;

        button {
            color: var(--colors-brand-2);
            background-color: transparent;
            border: none;
            font-size: 18px;
            font-weight: 600;
            margin-left: 12px;
        }

        strong {
            color: var(--colors-grey-2);
            margin-right: 6px;
            font-weight: 800;
        }

        p {
            color: var(--colors-grey-3);
            font-weight: 600;
        }
    }
`