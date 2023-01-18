import styled, { css } from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(1rem, 3vw, 4rem);

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  a {
    font-size: clamp(1rem, 1.1vw, 1.4rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-500);
    color: var(--txt-clr);
    text-decoration: none;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  ${({ column }) => column !== "col" && css`
      justify-content: flex-start;

      ul {
        flex-direction: column;
        gap: 0.7rem;
      }

      a {
        font-weight: var(--fw-400);
      }

      @media screen and (max-width: 53em) {
        ul {
          align-items: center;
        }
      } ;
    `};

  ${({ hover }) => hover !== "foc" && css`
      a:where(:hover, focus-visible) {
        -webkit-text-stroke: 0.6px var(--txt-clr);
      }
    `};

  ${({ hidden }) => hidden !== "hide" && css`
      @media screen and (max-width: 53em) {
        display: none;
      } ;
    `}

  ${({ mobile }) => mobile !== "cel" && css`
      width: 75%;
      min-height: 100vh;
      padding: 5rem 0.5rem 1rem;
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 2000;
    `}
`;
