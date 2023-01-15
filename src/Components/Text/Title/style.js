import styled from "styled-components";

export const Title = styled.h2`
    max-width: ${({width}) => width}ch;
    margin-block: ${({margin}) => margin}rem;
    font-size: clamp(1.75rem, 2.4vw, 3rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    color: var(--txt-clr);
    text-align: ${({align}) => align};

    @media screen and (max-width:53em){
        margin-block: ${({mobile}) => mobile}rem;
    };
`;