import styled from "styled-components";

export const StyledNav = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.2rem;
    img {
        width: 125px;
    }
    div {
        display: none;
        padding: 1rem 0;
    }
    @media(min-width: 720px) {
        svg {
            display: none;
        }
        div {
            display: flex;
        }
    }
`