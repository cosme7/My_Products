import styled from "styled-components";

export const ToggleBtn = styled.button`
  /* Button Theme Color */
  --toogleLight: linear-gradient(-90deg, var(--bg-accent) 50%, var(--bg-none) 50%);
  --toogleDark: linear-gradient(90deg, var(--bg-accent) 50%, var(--bg-none) 50%);
  width: 2.5rem;
  aspect-ratio: 1;
  border-radius: 50px;
  border: none;
  display: grid;
  place-items: center;
  background-color: #f3f3f3;
  overflow: hidden;
  position: fixed;
  z-index: 9999;
  top: clamp(1.4rem, 1.5vw, 2.4rem);
  right: 4vw;

  span{
    width: 1.2rem;
    aspect-ratio: 1;
    outline: 3px solid var(--bg-accent);
    outline-offset: 2px;
    border-radius: inherit;
    display: block;
    background: ${(props) => props.theme.toogleLight};
  }

  @media screen and (max-width: 62.5em) {
    top: 84%;
    left: 84%;
  }
`;

export const lightTheme = {
  clrLight: 'var(--clr-dark)',
  logoLight: 'var(--clr-logo)',
  bgLight: 'var(--bg-light)',
  greyLight: 'var(--bg-light-100)',
  imgBottom: 'var(--img-light-bt)',
  imgTop: 'var(--img-light-tp)',
  menuLight: 'var(--bg-accent)',
  gdLight: 'var(--gd-light)',
  borderLight: 'var(--bg-light-200)',
  input: 'var(--bg-light-300)',
  form: 'var(--bg-none)',
  toogleLight: 'var(--toogleLight)',
};

export const darkTheme = {
  clrLight: 'var(--clr-light)',
  logoLight: 'var(--clr-light)',
  bgLight: 'var(--bg-dark)',
  greyLight: 'var(--bg-dark-100)',
  imgBottom: 'var(--img-dark-bt)',
  imgTop: 'var(--img-dark-tp)',
  menuLight: 'var(--bg-light)',
  gdLight: 'var(--bg-dark-100)',
  borderLight: 'var(--bg-dark-200)',
  input: 'var(--bg-light)',
  form: 'var(--bg-dark-100)',
  toogleLight: 'var(--toogleDark)',
};
