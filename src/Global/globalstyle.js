import { createGlobalStyle } from "styled-components";
import Ellight from "../Assets/home_02-5.png";
import EllDark from "../Assets/home_02-6.png";
import EllTopLight from "../Assets/home_06.png";
import EllTopDark from "../Assets/home_06-1.png";

export default createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*::before,
*::after {
    box-sizing: border-box;
}

:root{
    /* Font-Family */
    --ff-primary: 'Poppins', sans-serif;
    /* Font-Weight */
    --fw-700: 700;
    --fw-600: 600;
    --fw-500: 500;
    --fw-400: 400;
    --fw-300: 300;
    /* Background-Color */
    --bg-accent: #02897a;
    --bg-dark: #1f2e35;
    --bg-light: #FFFFFF;
    --bg-light-300: #E8E8E8;
    --bg-none: transparent;
    /* Font-Color */
    --clr-accent: #02897a;
    --clr-dark: #22343D;
    --clr-light: #FFFFFF;
    --clr-logo: #173A56;
    /* Border */
    --btn-border: 1px solid #BCD0E5;
    /* Background-Image */
    --img-light-bt: url(${Ellight});
    --img-dark-bt: url(${EllDark});
    --img-light-tp: url(${EllTopLight});
    --img-dark-tp: url(${EllTopDark});
}

body{
    /* Font Color*/
    --heading-logo: ${(props) => props.theme.logoLight};
    --txt-clr: ${(props) => props.theme.clrLight};
    /* Background */
    --bg-container: ${(props) => props.theme.bgLight};
    /* Backgroumd Image */
    --img-bottom: ${(props) => props.theme.imgBottom};
    --img-top: ${(props) => props.theme.imgTop};
    /* Menu */
    --menu: ${(props) => props.theme.menuLight};
    /* Background Body */
    background-color: var(--bg-container);
}

* > * {
    transition: all .3s linear;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
    list-style: none;
}

/* Set core root defaults */
html:focus-within {
    scroll-behavior: smooth;
}

/* Set core body defaults */
body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
    text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;
