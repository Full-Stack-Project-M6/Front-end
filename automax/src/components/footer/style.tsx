import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px 59px;
    gap: 10px;
    background-color: var(--colors-grey-0);
    color: white;
    button {
        width: 53px;
        height: 50px;
        border-radius: 4px;
        background-color: var(--colors-grey-1);
        border: none;
        color: white;
    }
`