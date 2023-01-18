import React from 'react';
import Navigation from '../Navigation';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo_00.png';
import * as S from './style';

export default function Header() {
  return (
    <>
      <header>
        <S.Container>
          <S.Wrapper>
            <S.LogoBox>
              <img src={Logo} alt="Logo" title="Logo" />
              <h1>Product</h1>
            </S.LogoBox>
            <Navigation hover='true'>
              <ul>
                <li>
                  <Link to='/'>Product</Link>
                </li>
                <li>
                  <Link to='customers'>Customers</Link>
                </li>
                <li>
                  <Link to='pricing'>Pricing</Link>
                </li>
                <li>
                  <Link to='resources'>Resources</Link>
                </li>
              </ul>
              <div>
                <Button btnBorder='btnBorder' label='Sign In' />
                <Button label='Sign Up' />
              </div>
            </Navigation>
          </S.Wrapper>
        </S.Container>
      </header>
    </>
  );
};
