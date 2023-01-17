import React from 'react';
//*  Components
import Container from '../../Components/Container'
import Wrapper from '../../Components/Wrapper';
import Button from '../../Components/Button';
import Title from '../../Components/Text/Title';
import SubTitle from '../../Components/Text/SubTitle';
import Sub from '../../Components/Text/Sub';
import Offer from '../../Components/Cards/Offer';
import Strats from '../../Components/Cards/Strats';
import Price from '../../Components/Cards/Prices';
import Testimonials from '../../Components/Cards/Testimonials';
import Call from '../../Components/CTA'
//* Image's
import Hero from '../../Assets/home_01.png';
import Arrow from '../../Assets/home_02-1.svg';
import Surveys from '../../Assets/home_02-2.svg';
import Heart from '../../Assets/home_02-3.svg';
import Time from '../../Assets/home_02-4.svg';
import Notes from '../../Assets/home_03.png';
import Search from '../../Assets/home_04.png';
import Photos from '../../Assets/home_05.png';
import Woman from '../../Assets/home_06-1.svg';
import OldWoman from '../../Assets/home_06-2.svg';
import Youth from '../../Assets/home_06-3.svg';
import OldMen from '../../Assets/home_06-4.svg';
import Details from '../../Assets/home_07-1.png';
import Rain from '../../Assets/home_07-2.png';
import Sky from '../../Assets/home_07-3.png';
import White from '../../Assets/home_08-1.svg';
import Blue from '../../Assets/home_08-2.svg';
import Red from '../../Assets/home_08-3.svg';
//* Styles
import * as S from './style';

export default function Products() {
  return (
    <>
      <main>
        <Container>
          <Wrapper align='center' img='true' mobile='column-reverse'>
            <S.WorkTxt>
              <h2>Work at the speed of thought</h2>
              <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
              <div>
                <Button label='Get Started' />
                <Button transparent='transparent' label='▶ Watch the Video' />
              </div>
            </S.WorkTxt>
            <img src={Hero} alt='People Talking' title='People Talking' />  
          </Wrapper>
        </Container>
        <Container bg='low'>
          <Wrapper align='center' direction='column' gap='4'>
            <Title align='center' width='25'>Product  was Built Specifically for You</Title>
            <S.CardWrapper>
              <Offer img={Arrow} title='First click tests'>
                <p>While most people enjoy casino gambling,</p>
              </Offer>
              <Offer img={Surveys} title='Design surveys'>
                <p>Sports betting, lottery and bingo playing for the fun.</p>
              </Offer>
              <Offer img={Heart} title='Preference tests'>
                <p>The Myspace page defines the individual.</p>
              </Offer>
              <Offer img={Time} title='Five second tests'>
                <p>Personal choices and the overall personality of the person.</p>
              </Offer>
            </S.CardWrapper>
            <Button label='SIGN UP NOW' />
          </Wrapper>
        </Container>
        <Container>
          <Wrapper align='center' img='true' mobile='column-reverse'>
            <S.PlansBox>
              <SubTitle mobile='0.5'>Effortless Validation for</SubTitle>
              <Title>Management</Title>
              <Sub width='47' margin='1' mobile='0.5'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</Sub>
              <ul>
                <li>
                  <SubTitle margin='0.5'>Accessory makers</SubTitle>
                  <Sub width='47'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun.</Sub>
                </li>
                <li>
                  <SubTitle margin='0.5'>Alterationists</SubTitle>
                  <Sub width='47'>If you are looking for a new way to promote your business that won’t cost you more money,</Sub>
                </li>
              </ul>
            </S.PlansBox>
            <img src={Notes} alt='Notes Arquives' title='Notes Arquives' />
          </Wrapper>
        </Container>
        <Container>
          <Wrapper align='center' img='true' mobile='column'>
            <img src={Search} alt='Support' title='Support' />
            <S.SupTxt>
              <SubTitle mobile='0.5'>Easier decision making for</SubTitle>
              <Title>Customer Support</Title>
              <Sub width='45' margin='1' mobile='.8'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</Sub>
              <ul>
                <li>Never worry about overpaying for your energy again.</li>
                <li>We will only switch you to energy companies that we trust and will treat you right.</li>
                <li>We track the markets daily and know where the savings are.</li>
              </ul>
            </S.SupTxt>
          </Wrapper>
        </Container>
        <Container>
          <Wrapper align='center' img='true'mobile='column-reverse'>
            <S.PlansBox>
              <SubTitle>Optimisation for</SubTitle>
              <Title>Collaborative</Title>
              <Sub width='47' margin='1' mobile='0.5'>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior.</Sub>
              <ul className='PlansList'>
                <li>
                  <SubTitle margin='0.5'>Accessory makers</SubTitle>
                  <Sub width='47'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun.</Sub>
                </li>
                <li>
                  <SubTitle margin='0.5'>Alterationists</SubTitle>
                  <Sub width='47'>If you are looking for a new way to promote your business that won’t cost you more money,</Sub>
                </li>
              </ul>
            </S.PlansBox>
            <img src={Photos} alt='Photos Archive' title='Photos Archive' />
          </Wrapper>
        </Container>
        <Container other='high'>
          <Wrapper align='center' direction='column'>
            <Title align='center'>Quick & Easy Process</Title>
            <Sub align='center' width='55'>Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?</Sub>
            <S.QuickGrid>
              <div>
                <img src={Woman} alt="Testimonials" title="Testimonials" />
                <p>I can take care of your pitch</p>
              </div>
              <div>
                <p>I can prototype your app</p>
                <img src={OldWoman} alt="Testimonials" title="Testimonials" />
              </div>
              <div>
                <p>I can design you website</p>
                <img src={Youth} alt="Testimonials" title="Testimonials" />
              </div>
              <div>
                <img src={OldMen} alt="Testimonials" title="Testimonials" />
                <p>I can help marketing strategy</p>
              </div>
            </S.QuickGrid>
            <Button label='Contact our export' />
          </Wrapper>
        </Container>
        <Container>
          <Wrapper direction='column'>
              <Title>Contents Strategies</Title>
              <Sub margin='1' mobile='0'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</Sub>
              <S.StratsGrid>
                <Strats img={Details} title='Increasing Prosperity With Positive Thinking' /> 
                <Strats img={Rain} title='Motivation Is The First Step To Success' /> 
                <Strats img={Sky} title='Success Steps For Your Personal Or Business' /> 
              </S.StratsGrid>
          </Wrapper>
        </Container>
        <Container>
          <Wrapper align='center' direction='column'>
            <Title>Price Table</Title>
            <Sub margin='.25'>We offer competitive price</Sub>
            <S.PriceGrid>
              <Price title='Free' price='0' operators='Only 2 Operators'>
                <Button label='Order Now' />
              </Price>
              <Price title='Standard' price='5' operators='5+ Operators' inverted='true'>
                <Button inverted='true' label='Order Now' />
              </Price>
              <Price title='Premium' price='10' operators='10+ Operators'>
                <Button label='Order Now' />
              </Price>
            </S.PriceGrid>
          </Wrapper>
        </Container>
        <Container>
          <Wrapper align='center' direction='column'>
            <Title>What Clients Say</Title>
            <Sub align='center' margin='1' width='50'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Sub>
            <S.ClientGrid>
              <Testimonials img={White} />
              <Testimonials img={Blue} />
              <Testimonials img={Red} />
            </S.ClientGrid>
          </Wrapper>
        </Container>
        <Container>
          <Call />
        </Container>
      </main>
    </>
  );
};