import styled from "styled-components";

export const Testimonials = styled.div`
    padding: 0 2rem clamp(1.5rem, 2vw, 2rem);
    border: 1px solid #DEDEDE;
    background-color: var(--bg-light);
    
    & > *{
        margin-block-start: clamp(1rem, 2vw, 2rem);
    }

    img{
        width: clamp(150px, 12vw, 250px);
    }

    div{
        display: flex;
        align-items: center;
        gap: 1rem;

        h3{
            font-family: var(--ff-primary);
            font-weight: var(--fw-700);
            color: var(--clr-accent);
        }

        p{
            font-family: var(--ff-primary);
            font-weight: var(--fw-600);
            color: var(--clr-dark);
        }

        img{
            width: 70px;
        }
    }
`;