import styled, { css } from "styled-components";

export const Navigation = styled.nav`
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;

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

    div{
        display: flex;
        gap: 1.5rem;
    }

    ${({column}) => column !== "col" && css`
        justify-content: flex-start;

        ul{
            flex-direction: column;
            gap: .7rem;
        }

        a{
            font-weight: var(--fw-400);
        }

        @media screen and (max-width:53em){
            width: 100%;
            
            ul{
                align-items: center;
            }
        };
    `};

    ${({hover}) => hover !== 'focus' && css`
        a:where(:hover, focus-visible){
            -webkit-text-stroke: .6px var(--txt-clr);
        }
    `};
`;