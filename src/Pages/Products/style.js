import styled, {css} from "styled-components";
import Orange from '../../Assets/home_04-1.svg'
import Red from '../../Assets/home_04-2.svg'
import Blue from '../../Assets/home_04-3.svg'

export const Container = styled.section`
    padding-block: 4rem;
    background-color: var(--bg-container);

    @media screen and (max-width:53em){
        padding-block: 2rem;
    };

    ${({background}) => background !== 'normal' && css`
        background-image: var(--img-light-bt);
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: 100% 50%;

        @media screen and (max-width:53em){
            background-size: 200% 40%;
        };
    `};
`;

export const WorkBox = styled.div`
    width: 85%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    img{
        width: 50%;
    }

    @media screen and (max-width:48em){
        width: 90%;
        flex-direction: column-reverse;

        img{
            width: 80%;
        }
    }

    @media screen and (max-width:25em){
        img{
            width: 95%;
        }
    }
`;

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

    @media screen and (max-width:48em){
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
    gap: 5rem;

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
        gap: 2rem;

        .CardWrapper{
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
        }
    };
`;

export const PlansBox = styled.div`
    width: 85%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    div{
        display: flex;
        flex-direction: column;
    }

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

    .PlansList{
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

    img{
        width: 50%;
    }

    @media screen and (max-width:53em){
        width: 90%;
        flex-direction: column-reverse;
        gap: 2rem;

        img{
            width: 80%;
        }

        .PlansList{
            margin-block-start: 1rem;

            h6{
                line-height: 2;
            }
        }
    };

    @media screen and (max-width:25em){
        img{
            width: 100%;
        }
    };
`;

export const SupBox = styled.div`
    width: 85%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    img{
        width: 50%;
    }

    @media screen and (max-width:53em){
        width: 90%;
        flex-direction: column;
        gap: 2rem;

        img{
            width: 80%;
        }
    };

    @media screen and (max-width:25em){
        img{
            width: 100%;
        }
    }
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