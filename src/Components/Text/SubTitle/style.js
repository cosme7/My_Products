import styled from "styled-components";

export const SubTitle = styled.h5`
    margin-block: ${({margin}) => margin}rem;
    font-size: clamp(1.05rem, 1.2vw, 1.5rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-600);
    color: var(--txt-clr);
    text-align: ${({align}) => align};
    
    @media screen and (max-width:53em){
        margin-block: ${({mobile}) => mobile}rem;
    };
`;
