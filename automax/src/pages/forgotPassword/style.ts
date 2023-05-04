import styled from "styled-components";

export const StyledSuccessRecover = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    max-width: 400px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 2.1rem 1.5rem;
    background-color: var(--colors-grey-10);
    border-radius: 4px;
    p {
        align-self: center;
        margin: 2rem 0;
    }
    img {
        opacity: .9;
    }
    button {
        width: 100%;
    }
`
export const StyledFormRecover = styled.form`
    display: flex;
    flex-direction: column;
    width: 75%;
    max-width: 400px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 2.1rem 1.5rem;
    background-color: var(--colors-grey-10);
    border-radius: 4px;
    position: relative;
    animation-name: recover;
    animation-duration: .8s;

    h1 {
        margin-bottom: 1.6rem;
    }

    label {
        font-size: 14px;
    }

    input {
        margin-bottom: 1rem;
    }
    
    blockquote {
        align-self: self-end;
        margin-bottom: 1.2rem;
        color: var(--colors-grey-3);
        font-size: 14px;
    }

    p {
        font-size: 14px;
        color: var(--colors-grey-3);
        align-self: center;
        margin: 1.3rem 0;
    }
    span {
        color: red;
        margin-bottom: 1rem;
        padding-left: .5rem;
    }

    button {
        width: 100%;
    }
    a {
        color: blue;
        cursor: pointer;
    }
    .newPass {
        display: flex;
        margin-top: 3rem;
        margin: 0;
        width: 100%;
    }
    @keyframes recover {
        0% {transform: translate(0, -100%); opacity: 0;}
        100% {transform: translate(0); opacity: 1;}
    }
`
