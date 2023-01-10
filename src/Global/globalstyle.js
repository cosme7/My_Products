import { createGlobalStyle } from "styled-components";

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
    --bg-dark: #22343D;
    --bg-light: #FFFFFF;
    --bg-none: transparent;
    /* Font-Color */
    --clr-accent: #02897a;
    --clr-dark: #22343D;
    --clr-light: #FFFFFF;
    --clr-logo: #173A56;
    /* Border */
    --btn-border: 1px solid #BCD0E5;
}

body{
    /* Font */
    --heading-logo: var(--clr-logo);
    --txt-clr: var(--clr-dark);
    /* Background */
    --bg-container: var(--bg-light);
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
