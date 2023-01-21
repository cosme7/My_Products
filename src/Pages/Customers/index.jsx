import React from 'react';
//*  Components
import Container from '../../Components/Container'
import Wrapper from '../../Components/Wrapper';
import Button from '../../Components/Button';
import Title from '../../Components/Text/Title';
import SubTitle from '../../Components/Text/SubTitle';
import Sub from '../../Components/Text/Sub';
import Price from '../../Components/Cards/Prices';
import Details from '../../Components/Details';
import Call from '../../Components/CTA';
//* Image's
import Data from '../../Assets/pricing_01.png';
import Mobile from '../../Assets/pricing_01-0.png';
//* Styles
import * as S from './style';

export default function Customers() {
  return (
    <>
      <main>
        <Container>
          <Wrapper direction='column' align='center'>
            <SubTitle margin='3' mobile='1'>PRICING</SubTitle>            
            <Title>Price Table</Title>
            <Sub margin='.25'>We offer competitive price</Sub>
            <S.PriceGrid>
              <Price title='Free' price='0' operators='Only 2 Operators'>
                <Button label='Order Now' />
              </Price>
              <Price title='Standard' price='5' operators='5+ Operators' inverted='ok'>
                <Button inverted='ok' label='Order Now' />
              </Price>
              <Price title='Premium' price='10' operators='10+ Operators'>
                <Button label='Order Now' />
              </Price>
            </S.PriceGrid>
          </Wrapper>
        </Container>
        <Container gd='ok'>
          <Wrapper direction='column' align='center' gap='2'>
            <SubTitle>ENTERPRISE</SubTitle>            
            <Title align='center'>Are you interested  in a custom-tailored plan?</Title>
            <Sub align='center'>Product is a set of advanced features for really large teams with projects.</Sub>
            <Button label='Get in touch with us' />
          </Wrapper>
        </Container>
        <Container>
          <Title align='center' margin='5' mobile='1'>Product is being used with great effects alongside:</Title>
          <Wrapper img='ok' align='center' mobile='column' gap='2'>
            <S.Picture>
              <source srcSet={Mobile} media='(max-width: 53em)' />
              <img src={Data} alt="Data Files" title="Data Files" />
            </S.Picture>
            <S.ProductList>
              <li>
                <SubTitle margin='1'>Enterpreneur</SubTitle>
                <Sub width='50'>Product is a great way to help medium and samall enterprise owners achieve their goals</Sub>
              </li>
              <li>
                <SubTitle margin='1'>Accountants</SubTitle>
                <Sub width='55'>Whether you are working on contract with clients, or on other key accounting documents, Product is for you</Sub>
              </li>
              <li>
                <SubTitle margin='1'>Universities</SubTitle>
                <Sub width='50'>Organize university projects and have documents easily graded online with Product</Sub>
              </li>
            </S.ProductList>
          </Wrapper>
        </Container>
        <Container>
          <Wrapper direction='column'>
            <Title align='center'>Frequently asked question</Title>
            <Sub align='center' margin='1'>Something is not clear? You need help? Check our FAQ section</Sub>
            <Details title='What are my payment option?'>
              <Sub>Paypal, Credit Card and Debit Card.</Sub>
            </Details>
            <Details title='How can I invite collaborator to platform?'>
              <Sub>After creating your account you will have an oppurtunity to create your first project that will be associated withthe collaborators e-mail. An invitation  will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish userd onboarding.</Sub>
            </Details>
            <Details title='Can I upgrade my plan?'>
              <Sub>Yes!</Sub>
            </Details>
            <Details title='Can I cancel my plan at anytime?'>
              <Sub>Yes, anytime you want c: !</Sub>
            </Details>
          </Wrapper>
        </Container>
        <Container>
          <Call />
        </Container>
      </main>
    </>
  );
};
