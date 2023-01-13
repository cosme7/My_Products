import styled, { css } from "styled-components";

export const Navigation = styled.nav`
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    ul{
        display: flex;
        gap: 2rem;
        list-style: none;
    }

    a{
        font-size: clamp(1rem, 1.1vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-500);
        color: var(--txt-clr);
        text-decoration: none;
    }

    a:where(:hover, focus-visible){
        -webkit-text-stroke: .6px var(--txt-clr);
    }

    div{
        display: flex;
        gap: 1.5rem;
    }

    ${({column}) => column !== "col" && css`
        ul{
            flex-direction: column;
        }

        a:where(:hover, focus-visible){
            -webkit-text-stroke: none;
        }
    `};
`;