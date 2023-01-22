import styled from "styled-components";

export const BusinessBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2vw, 3rem);

    h2{
        font-size: clamp(1.8rem, 3.5vw, 4.5rem);
    }

    p{
        font-size: clamp(1rem, 1.5vw, 2rem);
    }

    form{
        width: 90%;	
        display: flex;
        position: relative;
    }

    button{
        min-height: 6vh;
        position: absolute;
        border-radius: 100vmax;
        top: 4px;
        right: .5rem;
    }

    div{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    p{
        color: var(--txt-clr);
    }

    span{
        font-weight: var(--fw-700);
        color: var(--clr-accent);
    }

    @media screen and (max-width:53em){
        align-items: center;
        margin-block-end: 3rem;

        h2, p{
            text-align: center;
        }
        
        div{
            justify-content: center;
        }
    }

    @media screen and (max-width:25em){
        form{
            width: 100%;
        }
    }
`;

export const Picture = styled.picture`
    width: 50%;
    
    img{
        width: 100%;
    }

    @media screen and (max-width:53em){
        width: 80%;
    }

    @media screen and (max-width:25em){
        width: 100%;
    }
`;

export const StoriesGrid = styled.div`
    width: 100%;
    margin-block: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem 2rem;

    a{
        grid-area: 3 / 2;
        gap: .5rem;
        font-size: clamp(1rem, 1.2vw, 1.7rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-500);
        color: var(--txt-clr);
        text-decoration: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    a::after{
        content: '🡪';
        padding: .1em .4em;
        font-size: 12px;
        border: 2px solid var(--txt-clr);
        border-radius: 100vmax;
    }

    @media screen and (max-width:53em){
        grid-template-columns: repeat(2, 1fr);

        a{
            grid-area: 4 / 2 span;
        }
    }

    @media screen and (max-width:35em){
        grid-template-columns: 1fr;
        gap: 2rem;

        a{
            grid-area: 7 / 1 span;
        }
    }
`;

export const Figure = styled.figure`
    margin-block: clamp(1rem, 2vw, 2.5rem);
    display: flex;
    gap: 1.5rem;

    img{
        width: clamp(40px, 3vw, 60px);
    }
`;

export const Img = styled.picture`
    margin-block: clamp(1rem, 4vw, 5rem);
    width: 70%;
    
    img{
        width: 100%;
    }

    @media screen and (max-width:53em){
        width: 80%;
    }

    @media screen and (max-width:31em){
        margin-block: 0 1rem;
        width: 100%;
    }
`;

export const Form = styled.form`
    width: 70%;
    padding: 3rem 3rem;
    border: 1px solid #DDDDDD;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    background-color: var(--form);

    h5{
        align-self: center;
    }

    input{
        border: none;
    }

    textarea{
        width: 100%;
        padding: 1rem;
        border-radius: 2px;
        border: none;
        font-size: clamp(1rem, 1vw, 1.2rem);
        font-family: var(--ff-primary);
        background-color: var(--input);
    }

    textarea::placeholder{
        font-size: clamp(1rem, 1vw, 1.2rem);
        font-family: var(--ff-primary);
    }

    button{
        border-radius: 100vmax;
    }

    img{
        width: 100%;
    }

    @media screen and (max-width:53em){
        width: 80%;
        margin-block-end: 2rem;
        padding: 3rem 1rem;

        button{
            padding: 1em 3em;
        }
    }

    @media screen and (max-width:31em){
        width: 100%;
        padding: 3rem 0.5rem;
    }
`;