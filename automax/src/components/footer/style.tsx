import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 35px;
    gap: 10px;
    background-color: var(--colors-grey-0);
    color: white;
    img {
        width: 150px;
    }
    button {
        width: 53px;
        height: 50px;
        border-radius: 4px;
        background-color: var(--colors-grey-1);
        border: none;
        color: white;
    }
    @media(min-width: 720px) {
        flex-direction: row;
    }
`