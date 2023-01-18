import styled from "styled-components";

export const Card = styled.div`
    outline: 1px solid #DEDEDE;
    border-radius: 8px;
    background-color: var(--bg-light);

    img{
        width: 100%;
        background-color: var(--bg-container);
    }

    div{
        padding: 1.5rem 0rem 1.5rem clamp(1px, 1.4vw, 1.7rem);
    }

    p{
        font-size: clamp(1rem, 1.1vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--clr-dark);
    }

    h6{
        max-width: 20ch;
        margin-block-start: 1rem;
        font-size: clamp(1.5rem, 1.8vw, 2.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--clr-dark);
    }

    &:hover h6,
    &:focus h6{
        color: var(--clr-accent);
    }

    @media screen and (max-width:53em){
        div{
            padding: 1.5rem 2px;
        }
    };
`;