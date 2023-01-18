import React from 'react';
import Navigation from '../Navigation';
import Input from '../Input';
import Button from '../Button';
import Logo from '../../Assets/logo_00.png';
import Instagram from '../../Assets/footer_01.svg';
import Facebook from '../../Assets/footer_02.svg';
import Twitter from '../../Assets/footer_03.svg';
import * as S from './style';

export default function Footer() {
  return (
    <>
      <footer>
        <S.FooterContainer>
          <S.FooterGrid>
            <S.Box>
              <div>
                <img src={Logo} alt="Logo" title="Logo" />
                <h2>Product</h2>
              </div>
              <figure>
                <a href='https://www.instagram.com' target='_blank' rel="noreferrer" >
                  <img src={Instagram} alt="Instagram" title="Instagram" />
                </a>
                <a href='https://www.facebook.com' target='_blank' rel="noreferrer" >
                  <img src={Facebook} alt="Facebook" title="Facebook" />
                </a>
                <a href='https://www.twitter.com' target='_blank' rel="noreferrer" >
                  <img src={Twitter} alt="Twitter" title="Twitter" />
                </a>
              </figure>
            </S.Box>
            <S.NavBox>
              <h5>Resource</h5>
              <Navigation column='true'>
                <ul>
                  <li><a href="htttps://google.com" target='_blank' rel="noreferrer">About Us</a></li>
                  <li><a href="htttps://google.com" target='_blank' rel="noreferrer">Blog</a></li>
                  <li><a href="htttps://google.com" target='_blank' rel="noreferrer">Contact</a></li>
                  <li><a href="htttps://google.com" target='_blank' rel="noreferrer">FAQ</a></li>
                </ul>
              </Navigation>
            </S.NavBox>
            <S.NavBox>
              <h5>Legal Stuff</h5>
              <Navigation column='true'>
                <ul>
                  <li><a href="htttps://google.com" target='_blank' rel="noreferrer">Disclaimer</a></li>
                  <li><a href="htttps://google.com" target='_blank' rel="noreferrer">Financing</a></li>
                  <li><a href="htttps://google.com" target='_blank' rel="noreferrer">Privacy Policy</a></li>
                  <li><a href="htttps://google.com" target='_blank' rel="noreferrer">Terms of Service</a></li>
                </ul>
              </Navigation>
            </S.NavBox>
            <S.FormBox>
              <h5>knowing you're always on the best energy deal.</h5>
              <form>
                <Input shadow='true' type='email' name='email' />
                <Button label='Sign up Now' />
              </form>
            </S.FormBox>
          </S.FooterGrid>
          <p>Made With Love By Figmaland All Right Reserved</p>
        </S.FooterContainer>
      </footer>
    </>
  );
};
