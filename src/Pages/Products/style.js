import styled from "styled-components";
import Orange from '../../Assets/home_04-1.svg'
import Red from '../../Assets/home_04-2.svg'
import Blue from '../../Assets/home_04-3.svg'

export const WorkTxt = styled.div`
    display: flex;
    flex-direction: column;

    h2{
        max-width: 15ch;
        font-size: clamp(1.8rem, 3.5vw, 4.5rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--txt-clr);
    }

    p{
        max-width: 40ch;
        margin-block: 1vw 4vw;
        font-size: clamp(1rem, 1.5vw, 2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--txt-clr);
    }

    div{
        width: 100%;
        display: flex;
        gap: .5rem;
    }

    @media screen and (max-width:53em){
        align-items: center;

        h2, p{
            text-align: center;
        }
        
        p{
            margin-block: 1rem;
        }

        div{
            justify-content: center;
        }
    }
`;

export const BuiltBox = styled.div`
    width: 85%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(2rem, 4.5vw, 6rem);

    h2{
        max-width: 25ch;
        font-size: clamp(2rem, 2.4vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--txt-clr);
        text-align: center;
    }

    .CardWrapper{
       width: 100%; 
       display: flex;
       justify-content: space-between;
       gap: 0.5rem;
    }

    button{
        padding: .9em 1.8em;
    }

    @media screen and (max-width:53em){
        width: 90%;

        .CardWrapper{
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
    };
`;

export const PlansBox = styled.div`
    display: flex;
    flex-direction: column;

    h5{
        font-size: clamp(1rem, 1.1vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-600);
        color: var(--txt-clr)        
    }

    h2{
        font-size: clamp(1.9rem, 2.4vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--txt-clr) 
    }

    p{
        max-width: 47ch;
        font-size: clamp(1rem, 1.1vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--txt-clr) 
    }

    ul{
        margin-block-start: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;

        h6{
            line-height: 2.5;
            font-size: clamp(1.05rem, 1.2vw, 1.5rem);
            font-family: var(--ff-primary);
            font-weight: var(--fw-600);
            color: var(--txt-clr)
        }

        p{
            max-width: 47ch;
            font-size: clamp(1rem, 1.1vw, 1.4rem);
            font-family: var(--ff-primary);
            font-weight: var(--fw-400);
            color: var(--txt-clr)
        }
    };

    @media screen and (max-width:53em){
        ul{
            margin-block-start: 1rem;

            h6{
                line-height: 2;
            }
        }
    };
`;

export const SupTxt = styled.div`
    h6{
        font-size: clamp(1rem, 1.1vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-600);
        color: var(--txt-clr)   
    }

    h2{
        font-size: clamp(1.9rem, 2.4vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--txt-clr) 
    }

    p{
        max-width: 45ch;
        margin-block: 1.5rem;
        font-size: clamp(1rem, 1.1vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--txt-clr) 
    }

    ul{
        display: flex;
        flex-direction: column;
        margin-inline-start: 3.5rem;
        gap: 1.5rem;
        list-style: none;
    }

    li{
        max-width: 36ch;
        font-size: clamp(.85rem, 1.1vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--txt-clr); 
        position: relative;
    }

    li::before{
        content: url(${Orange});
        position: absolute;
        display: block;
        left: -3.5rem;
        top: .5rem;
    }

    li:nth-child(2)::before{
        content: url(${Red});
    }

    li:nth-child(3)::before{
        content: url(${Blue});
    }

    @media screen and (max-width:53em){
        p{
            margin-block: .5rem; 
        }
    };
`;

export const QuickBox = styled.div`
    width: 85%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2{
        font-size: clamp(1.9rem, 2.4vw, 3rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-700);
        color: var(--txt-clr)        
    }

    p{
        max-width: 55ch;
        margin-block-start: 1rem;
        font-size: clamp(1rem, 1.1vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--txt-clr);
        text-align: center;
    }

    button{
        padding: .7em 1.8em;
    }

    @media screen and (max-width:53em){
        width: 90%;

        h2{
            margin-block-start: 1rem;
            text-align: center;
        }
    };
`;

export const QuickGrid = styled.div`
    width: 80%;
    margin-block: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: center;
    gap: clamp(1rem, 4vw, 4.2rem) clamp(1rem, 15vw, 18rem);

    div{
        width: 100%;
        display: flex;
        align-items: center;
        gap: clamp(1rem, 1.5vw, 2rem);
    }

    div:nth-child(odd){
        justify-content: flex-start;
    }

    div:nth-child(even){
        justify-content: flex-end;
    }

    p{
        font-size: clamp(1rem, 1.1vw, 1.4rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--txt-clr);
    }

    @media screen and (max-width:53em){
        div:nth-child(odd),
        div:nth-child(even){
            justify-content: space-evenly;
            text-align: center;
        }

        div:nth-child(2){
            grid-area: 4 / 1;
        }
    };

    @media screen and (max-width:25em){
        width: 100%;
        
        div:nth-child(odd),
        div:nth-child(even){
            justify-content: space-between;
        }
    };
`;