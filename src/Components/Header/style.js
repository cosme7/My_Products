import styled from "styled-components";

export const Container = styled.section`
    padding: 1.2rem 1rem;
    background-color: var(--bg-container);
`;

export const Wrapper = styled.div`
    width: 85%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width:62.5em){ 
        width: 100%;
    };
`;  

export const LogoBox = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(.5rem, 1vw, 1.3rem);

    img{
        width: 45px;
    }

    h1{
        font-size: clamp(1.8rem, 2vw, 2.5rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--heading-logo);
    }
`;