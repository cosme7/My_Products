import styled from "styled-components";

export const FooterContainer = styled.section`
    padding: clamp(1rem, 4vw, 5rem) 0.5rem 0;
    background-color: var(--bg-container);

    p{
        margin-block: clamp(1.2rem, 1.5vw, 2rem);
        font-size: clamp(0.99rem, 1.1vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-500);
        color: var(--txt-clr);
        text-align: center;
    }
`;

export const FooterGrid = styled.div`
    width: 80%;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: clamp(1.2rem, 2vw, 3rem);

    @media screen and (max-width:53em){
        place-items: center;
        grid-template-columns: 1fr;
    };
`;

export const Box = styled.div`
    div{
        display: flex;
        align-items: center;
        gap: clamp(.5rem, 1.2vw, 1.4rem);

        img{
            width: clamp(1.7rem, 2vw, 3rem);
        }

        h2{
            font-size: clamp(1.5rem, 1.6vw, 2rem);
            font-family: var(--ff-primary);
            font-weight: var(--fw-700);
            color: var(--heading-logo);
        }
    };

    figure{
        display: flex;
        margin-top: 1rem;
        gap: clamp(1rem, 1.4vw, 1.7rem);

        img{
            width: 45px;
        }
    };

    @media screen and (max-width:53em){
        div{
            justify-content: center;
        }
    };
`;

export const NavBox = styled.div`   
    display: flex;
    flex-direction: column;
    gap: .7rem;

    h5{
        font-size: clamp(1.05rem, 1.2vw, 1.5rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-500);
        color: var(--txt-clr);
    }

    @media screen and (max-width:53em){
        h5{
            text-align: center;
        }
    };
`;

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h5{
        max-width: 22ch;
        margin-block-end: clamp(1rem, 2.4vw, 2.5rem);
        font-size: clamp(1rem, 1.1vw, 1.5rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--txt-clr);
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        button{
            padding: .5em 1em;
        }
    }

    @media screen and (max-width:53em){ 
        h5{
            text-align: center;
        }

        form{
            align-items: center;
        }
    };
`;

