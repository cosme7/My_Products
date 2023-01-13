import styled from "styled-components";

export const Container = styled.section`
    background-color: var(--bg-container);
`;

export const WorkBox = styled.div`
    width: 85%;
    padding: 2rem 1.5rem;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    img{
        width: 50%;
    }

    @media screen and (max-width:48em){
        width: 100%;
        flex-direction: column-reverse;

        img{
            width: 80%;
        }
    }

    @media screen and (max-width:25em){
        img{
            width: 100%;
        }
    }
`;

export const WorkTxt = styled.div`
    display: flex;
    flex-direction: column;

    h2{
        max-width: 15ch;
        font-size: clamp(1.8rem, 3.5vw, 4.5rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
    }

    p{
        max-width: 40ch;
        margin-block: 1vw 4vw;
        font-size: clamp(.9rem, 1.5vw, 2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
    }

    div{
        width: 100%;
        display: flex;
        gap: .5rem;
    }

    @media screen and (max-width:48em){
        align-items: center;

        h2, p{
            text-align: center;
        }
        
        p{
            margin-block: 1rem;
        }

        div{
            justify-content: center;
        }
    }
`;