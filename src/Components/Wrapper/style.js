import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    width: 85%;
    margin-inline: auto;
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: space-between;
    align-items: ${({align}) => align};
    gap: ${({gap}) => gap}rem;

    @media screen and (max-width:53em){
        width: 90%;
        flex-direction: ${({mobile}) => mobile};
        gap: 0.5rem;
    };

    ${({img}) => img !== 'image' && css`
        img{
            width: 50%;
        }

        @media screen and (max-width:53em){
            img{
                width: 80%;
            }
        }

        @media screen and (max-width:25em){
            img{
                width: 100%;
            }
        }
    `};
`;