import styled, {css} from "styled-components";

export const Container = styled.section`
    padding-block: clamp(3rem, 3.7vw, 4.5rem);
    background-color: var(--bg-container);
    background-repeat: no-repeat;
    background-size: 100% 50%;

    @media screen and (max-width:53em){
        background-size: 200% 40%;
    };

    ${({bg}) => bg !== 'bottom' && css`
        background-image: var(--img-bottom);
        background-position: center bottom;
    `};

    ${({other}) => other !== 'top' && css`
        background-image: var(--img-top);
        background-position: center top;
    `};
`;