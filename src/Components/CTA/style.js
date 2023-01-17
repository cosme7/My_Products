import styled from "styled-components";

export const Call = styled.div`
    width: 90%;
    max-width: 70%;
    margin-inline: auto;
    border-radius: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-items: center;
    background-color: var(--bg-accent);

    div{
        padding-inline-start: clamp(.5rem, 4vw, 4.2rem);

        h2{
            font-size: clamp(1.8rem, 2.7vw, 3.4rem);
            font-family: var(--ff-primary);
            font-weight: var(--fw-600);
            color: var(--clr-light);
        }

        & > *{
            margin-block: clamp(1rem, 2vw, 3rem);
        }

        @media screen and (max-width:53em){
            padding-inline: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            h2{
                text-align: center;
            }

            button{
                padding: .7em 2em;
            }
        };
    }

    img{
        width: 100%;
    }

    @media screen and (max-width:53em){
        grid-template-columns: 1fr;
    };

    @media screen and (max-width:31.25em){
        max-width: 90%;
    };
`;