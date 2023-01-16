import styled, { css } from "styled-components";

export const Card = styled.div`
  padding-block: 1.5rem 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--bg-light);
  box-shadow: 0px 2px 8px 0px #00000040;

  h6 {
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    color: var(--clr-dark);
  }

  p {
    font-size: clamp(1rem, 1.1vw, 1.4rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-500);
    color: var(--clr-dark);
  }

  h2 {
    font-size: clamp(4.5rem, 5vw, 5.4rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    color: var(--clr-accent);
    position: relative;
  }

  h2::after {
    content: "$";
    font-size: 2rem;
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    color: inherit;
    display: block;
    position: absolute;
    right: -1.5rem;
    bottom: 2rem;
    bottom: clamp(2rem, 2.5vw, 3rem);
  }

  div {
    display: flex;
    align-items: center;
    column-gap: 0.4rem;

    p {
      margin-top: 2.5rem;
      font-size: clamp(1rem, 1.1vw, 1.4rem);
      font-family: var(--ff-primary);
      font-weight: var(--fw-300);
      color: var(--clr-dark);
      opacity: 0.8;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    list-style: none;
  }

  li {
    font-size: clamp(1rem, 1.1vw, 1.4rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-500);
    color: var(--clr-dark);
  }

  button{
    padding: .5em 1em;
    margin-block-start: 3rem;
    border-radius: 8px;
  }

  ${({ inverted }) => inverted !== "accent" && css`
      background-color: var(--bg-accent);

      p {
        font-weight: var(--fw-400);
        color: var(--clr-light);
      }

      h6, h2, li{
        color: var(--clr-light);
      }

      div{
        p{
            color: var(--clr-light);
            opacity: 0.7;
        }
      }
`};
`;
