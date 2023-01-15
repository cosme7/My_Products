import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    h3{
        font-size: clamp(1.3rem, 1.5vw, 2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--txt-clr);
    }

    p{
        max-width: 24ch;
        font-size: clamp(1rem, 1.1vw, 1.4rem);
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