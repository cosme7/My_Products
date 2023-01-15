import styled from "styled-components";

export const Sub = styled.p`
    max-width: ${({width}) => width}ch;
    margin-block: ${({margin}) => margin}rem;
    font-size: clamp(0.99rem, 1.1vw, 1.4rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    color: var(--txt-clr);
    text-align: ${({align}) => align};

    @media screen and (max-width:53em){
        margin-block: ${({mobile}) => mobile}rem;
    };
`;