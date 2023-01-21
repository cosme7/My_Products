import styled from "styled-components";

export const Details = styled.details`
  padding-block-end: .5rem;
  border-bottom: 1px solid var(--details);

  & > summary {
    list-style-type: none;
  }

  & > summary::before{
    content: "+";
    padding: .1em .5em;
    margin-inline-end: 1rem;
    border-radius: 50px;
    font-size: clamp(1.05rem, 1.2vw, 1.5rem);
    font-family: var(--ff-primary);
    background-color: var(--bg-accent);
    color: var(--clr-light);
  }

  &[open] > summary::before{
    content: "-";
    padding: .1em .5em;
    margin-inline-end: 1rem;
    border-radius: 50px;
    font-size: clamp(1.05rem, 1.2vw, 1.5rem);
    font-family: var(--ff-primary);
    background-color: var(--bg-accent);
    color: var(--clr-light);
  }

  summary{
    margin-block: 1rem;
    font-size: clamp(1.05rem, 1.2vw, 1.5rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-500);
    color: var(--txt-clr);
  }
`;
