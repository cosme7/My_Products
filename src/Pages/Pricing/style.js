import styled from "styled-components";
import Files from '../../Assets/pricing_01-2.svg';
import Docs from '../../Assets/pricing_01-3.svg';
import Arquives from '../../Assets/pricing_01-4.svg';

export const PriceGrid = styled.div`
    width: 100%;
    margin-block: clamp(1rem, 2vw, 3rem);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: clamp(1rem, 2vw, 2.5rem);

    @media screen and (max-width:53em){
        grid-template-columns: 1fr;
    };
`;

export const ProductList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;

    li{
        position: relative;
    }

    li::before{
        content: url(${Files});
        position: absolute;
        display: block;
        top: 0;
    }

    li:nth-child(2)::before{
        content: url(${Docs});
    }

    li:nth-child(3)::before{
        content: url(${Arquives});
    }

    h5{
        margin-inline-start: 4rem;
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