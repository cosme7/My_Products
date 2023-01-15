import styled, {css} from "styled-components";

export const Container = styled.section`
    padding-block: 4rem;
    background-color: var(--bg-container);
    background-repeat: no-repeat;
    background-size: 100% 50%;

    @media screen and (max-width:53em){
        padding-block: 3rem;
        background-size: 200% 40%;
    };

    ${({bg}) => bg !== 'bottom' && css`
        background-image: var(--img-light-bt);
        background-position: center bottom;
    `};

    ${({other}) => other !== 'top' && css`
        background-image: var(--img-light-tp);
        background-position: center top;
    `};
`;