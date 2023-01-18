import styled from "styled-components";
import { Navigation } from "../Navigation/style";

export const Btn = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: fixed;
  z-index: 8000;
  right: 0.5rem;

  span {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  @media screen and (max-width: 53em) {
    display: block;
  }
`;

export const Icon = styled.svg`
  rect {
    transition: ${({ open }) =>
      open
        ? "y 300ms ease-in, rotate 300ms ease-in, opacity 300ms"
        : "y 300ms ease-in 300ms, rotate 300ms ease-in, opacity 300ms"};
    transform-origin: center;
  }

  rect:is(:nth-child(1), :nth-child(3)) {
    y: ${({ open }) => (open ? "45" : null)};
  }

  rect:nth-child(1) {
    rotate: ${({ open }) => (open ? "45deg" : "0")};
  }

  rect:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
  }

  rect:nth-child(3) {
    rotate: ${({ open }) => (open ? "-45deg" : "0")};
  }
`;

export const MenuBG = styled.div`
  width: 5rem;
  aspect-ratio: 1;
  border-radius: 100vmax;
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  z-index: 1000;
  transform: ${({ open }) => (open ? "scale(1000)" : "scale(0)")};
  transition: transform 300ms ease-in-out;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.5));
`;

export const Nav = styled(Navigation)`
  background-color: var(--bg-container);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  ul {
    flex-direction: column;
    align-items: center;
  }

  a{
    color: var(--txt-clr);
  }

  div {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (max-width: 53em) {
    display: flex;
    flex-direction: column;
  } ;
`;
