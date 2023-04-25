import styled from "styled-components";

export const StyledBackgroundRegister = styled.section`
    width: 100vw;
    background-color: var(--colors-grey-6);
    padding-top: 3.5rem;
    padding-bottom: 4rem;
`
export const StyledFormRegister = styled.form`
    display: flex;
    flex-direction: column;
    width: 75%;
    max-width: 400px;
    margin: 0 auto;
    padding: 2.5rem 2.1rem 2.1rem 2.1rem;
    background-color: var(--colors-grey-10);
    border-radius: 4px;
    

    h1 {
        margin-bottom: 1.6rem;
    }

    label {
        font-size: 14px;
        color: var(--colors-grey-2);
    }

    input {
        margin-bottom: 1rem;
    }

    input:nth-last-child(2) {
        margin-bottom: 2rem;
    }
    input:nth-last-child(1) {
        /* border: solid 1px red; */
    }

    textarea {
        width: 100%;
    }

    div {
        display: block;
        justify-content: space-between;
    }

    div:nth-child(1) {
        margin-right: .5rem;
    }

    .divContain {
        display: flex;
    }

    p {
        font-size: 15px;
        color: var(--colors-grey-0);
        margin: 1.3rem 0;
    }

    button {
        width: 100%;
        margin-bottom: .8rem;
    }
    
    /* .outline1:active {
        background-color: var(--colors-brand-1);
        color: var(--colors-whiteFixed);
    } */

    button:nth-child(1) {
        margin-right: .5rem;
    }
`