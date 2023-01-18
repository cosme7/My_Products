import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as S from "./style";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.path[0] !== btnRef.current) {
        setOpen(!true);
      }
    };

    document.body.addEventListener("click", closeMenu);
    return () => document.body.removeEventListener("click", closeMenu);
  }, [open]);

  return (
    <>
      <S.Btn open={open} onClick={() => {toggleMenu();}} >
        <S.Icon open={open} ref={btnRef} fill="var(--menu)" viewBox="0 0 100 100" width="45" >
          <rect width="80" height="10" x="10" y="25" rx="5"></rect>
          <rect width="80" height="10" x="10" y="45" rx="5"></rect>
          <rect width="80" height="10" x="10" y="65" rx="5"></rect>
        </S.Icon>
        <span>Menu</span>
      </S.Btn>
      <S.MenuBG open={open}></S.MenuBG>
      <S.Nav open={open} aria-label='primary-navigation'>
        <ul>
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="customers">Customers</Link>
          </li>
          <li>
            <Link to="pricing">Pricing</Link>
          </li>
          <li>
            <Link to="resources">Resources</Link>
          </li>
        </ul>
        <div>
          <Button btnBorder="btnBorder" label="Sign In" />
          <Button label="Sign Up" />
        </div>
      </S.Nav>
    </>
  );
}
