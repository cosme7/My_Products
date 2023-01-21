import styled, { css } from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({align}) => align};
    gap: 1rem;

    ${({bd}) => bd !== 'border' && css`
        padding: 2rem;
        border: 1px solid var(--offer-border);
        border-radius: 10px;

        h3, p{
            text-align: center;
        }

        @media screen and (max-width:53em){
            padding: 2rem 1rem;
        }
    `};

    h3{
        font-size: clamp(1.3rem, 1.5vw, 2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--txt-clr);
    }

    p{
        max-width: 26.35ch;
        font-size: clamp(1rem, 1.2vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--txt-clr);
    }

    @media screen and (max-width:53em){
        align-items: center;
        gap: 0.5rem;

        p{
            text-align: center;
        }
    };

    @media screen and (max-width:25em){
        img{
            width: 60px;
        }
    };
`;