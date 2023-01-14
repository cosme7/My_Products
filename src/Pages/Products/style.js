import styled, {css} from "styled-components";

export const Container = styled.section`
    padding-block: 4rem;
    background-color: var(--bg-container);

    @media screen and (max-width:53em){
        padding-block: 2rem;
    };

    ${({background}) => background !== 'normal' && css`
        background-image: var(--img-light-bt);
        background-repeat: no-repeat;
        background-size: 100% 100%;

        @media screen and (max-width:53em){
            background-position: center bottom;
            background-size: 200% 40%;
        };
    `};
`;

export const WorkBox = styled.div`
    width: 85%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    img{
        width: 50%;
    }

    @media screen and (max-width:48em){
        width: 90%;
        flex-direction: column-reverse;

        img{
            width: 80%;
        }
    }

    @media screen and (max-width:25em){
        img{
            width: 95%;
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
        font-size: clamp(1rem, 1.5vw, 2rem);
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

export const BuiltBox = styled.div`
    width: 85%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    h2{
        max-width: 25ch;
        font-size: clamp(2rem, 2.4vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--txt-clr);
        text-align: center;
    }

    .CardWrapper{
       width: 100%; 
       display: flex;
       justify-content: space-between;
       gap: 0.5rem;
    }

    button{
        padding: .9em 1.8em;
    }

    @media screen and (max-width:53em){
        width: 90%;
        gap: 2rem;

        .CardWrapper{
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
        }
    };
`;