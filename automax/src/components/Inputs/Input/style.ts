import styled from "styled-components";


export const StyledInput = styled.input`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "48px"};

    margin-top: 8px;
    padding-left: 12px;

    border-radius: 4px;
    border: 1.5px solid var(--colors-grey-7);

    font-weight: 400;
    font-size: 16px;
    
    &:focus{
        border: 2px solid var(--colors-brand-2);
        outline: none;
        background-color: var(--colors-grey-9);
        font-weight: 400;
        font-size: 16px;
    }

    ::placeholder {
        font-weight: 400;
        font-size: 16px;
        color: var(--colors-grey-3);
        opacity: 0.46;
    }

    :disabled{
        background-color: var(--colors-grey-8);
        border-color: var(--colors-grey-8);
        color: var(--colors-grey-3);
        cursor: not-allowed;
    }
`