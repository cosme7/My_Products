import styled, { css } from "styled-components";

export const Btn = styled.button`
    padding: .5em 2em;
    border-radius: 4px;
    border: none;
    font-size: clamp(0.8rem, 1.1vw, 1.4rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-600);
    background-color: var(--bg-accent);
    color: var(--clr-light);
    cursor: pointer;

    @media screen and (max-width:48em){
        padding: .9em 1.5em;
    };

    ${({btnBorder}) => btnBorder !== 'border' && css`
        border: var(--btn-border);
        background-color: var(--bg-none);
        color: var(--txt-clr);
    `};

    ${({transparent}) => transparent !== 'transp' && css`
        background-color: var(--bg-none);
        color: var(--clr-accent);
    `};

    ${({inverted}) => inverted !== 'invert' && css`
        background-color: var(--bg-light);
        color: var(--clr-accent);
    `};
`;