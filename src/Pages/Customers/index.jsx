import React from 'react';
import { Link } from 'react-router-dom';
//* Components
import Container from '../../Components/Container'
import Wrapper from '../../Components/Wrapper';
import Button from '../../Components/Button';
import Title from '../../Components/Text/Title';
import SubTitle from '../../Components/Text/SubTitle';
import Sub from '../../Components/Text/Sub';
import Offer from '../../Components/Cards/Offer';
import Call from '../../Components/CTA';
//* Image's
import Air from '../../Assets/clients_01-1.svg'
import Google from '../../Assets/clients_01-2.svg'
import Microsoft from '../../Assets/clients_01-3.svg'
import Fedex from '../../Assets/clients_01-4.svg'
import Arrow from '../../Assets/clients_02-1.svg';
import Result from '../../Assets/clients_02-2.svg';
import Heart from '../../Assets/clients_02-3.svg';
import Screen from '../../Assets/clients_03.png';
import Config from '../../Assets/clients_04.png';
import Analys from '../../Assets/clients_05.png';
import Stonks from '../../Assets/clients_06-1.svg';
import Graphic from '../../Assets/clients_06-2.svg';
//* Styles
import * as S from './style';

export default function Customers() {
  return (
    <>
      <main>
        <Container>
          <Title align='center'>Our Clients</Title>
          <S.ClientsGrid>
            <img src={Air} alt="AirBnB" title='AirBnB' />
            <img src={Google} alt="Google" title='Google' />
            <img src={Microsoft} alt="Microsoft" title='Microsoft' />
            <img src={Fedex} alt="Fedex" title='Fedex' />
          </S.ClientsGrid>
        </Container>
        <Container gr='ok'>
          <Title align='center'>Why Choose Product?</Title>
          <S.CardWrapper>
            <Offer bd='ok' align='center' img={Arrow} title='Special Business'>
              <p>Product helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
            </Offer>
            <Offer bd='ok' align='center' img={Result} title='Instant Result'>
              <p>Product helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
            </Offer>
            <Offer bd='ok' align='center' img={Heart} title='Fastest way to organize'>
              <p>Product helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
            </Offer>
          </S.CardWrapper>
        </Container>
        <Container>
          <Title align='center'>How Product Work?</Title>
          <S.WorkGrid>
            <img src={Screen} alt="Last Activity Screen" title='Last Activity' />
            <div>
              <SubTitle>STEP 1</SubTitle>
              <Title>Apply for a product</Title>
              <Sub width='45'>Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology.</Sub>
            </div>
            <div>
              <SubTitle>STEP 2</SubTitle>
              <Title>Pay fully refundable</Title>
              <Sub width='45'>Product will contactting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be fully refunded.</Sub>
            </div>
            <img src={Config} alt="Config Screen" title='Config' />
            <img src={Analys} alt="Data Analys Screen" title='Data Analys' />
            <div>
              <SubTitle>STEP 3</SubTitle>
              <Title>Completion</Title>
              <Sub width='42'>Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement.</Sub>
            </div>
            <Button label='Get in touch with us' />
          </S.WorkGrid>
        </Container>
        <Container gd='ok'>
          <Wrapper direction='column' align='center'>
            <Title align='center' width='30'>Join thousand of other who have already received offers</Title>,
            <S.JoinGrid>
              <S.ListBox>
                <img src={Stonks} alt="Actions Going Up" title='Wall Street' />
                <SubTitle margin='1'>Business</SubTitle>
                <ul>
                  <li>Cash Flow</li>
                  <li>Asset Backed</li>
                  <li>Receivables Finance</li>
                  <li><Link to='/resources'>Find the best business product</Link></li>
                </ul>
              </S.ListBox>
              <S.ListBox>
                <img src={Graphic} alt="Actions Going Up" title='Wall Street' />
                <SubTitle margin='1'>Enterprise</SubTitle>
                <ul>
                  <li>Site Acquisition</li>
                  <li>Bridge </li>
                  <li>Development Financing</li>
                  <li><Link to='/resources'>Find the best business product</Link></li>
                </ul>
              </S.ListBox>
          </S.JoinGrid>
          </Wrapper>
        </Container>
        <Container>
          <Call />
        </Container>
      </main>
    </>
  );
};
