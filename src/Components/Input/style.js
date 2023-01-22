import styled, { css } from "styled-components";

export const Input = styled.input`
    width: 100%;
    min-height: 5vh;
    border-radius: 2px;
    padding-inline-start: 1rem;
    border: 1px solid #BCD0E5;

    font-size: clamp(1rem, 1vw, 1.2rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-500);
    background-color: var(--bg-light);
    color: var(--clr-dark);

    &::placeholder{
        font-weight: var(--fw-500);
    }

    ${({shadow}) => shadow !== 'sd' && css`
        box-shadow: 0px 1px 2px 0px #00000040;
    `};

    ${({clr}) => clr !== 'inv' && css`
        border-radius: 40px;
        background-color: var(--input);
    `};

    ${({bg}) => bg !== 'none' && css`
        min-height: 7vh;
        border-radius: 100vmax;
        background-color: var(--bg-none);
        color: var(--txt-clr);

        &::placeholder{
            color: var(--txt-clr);
            font-size: clamp(0.75rem, 1vw, 1.2rem);
        }
    `};
`;