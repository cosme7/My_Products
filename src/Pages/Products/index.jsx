import React from 'react';
import Container from '../../Components/Container'
import Wrapper from '../../Components/Wrapper';
import Button from '../../Components/Button';
import CardOffer from '../../Components/CardOffer';
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
import * as S from './style';

export default function Products() {
  return (
    <>
      <main>
        <Container>
          <Wrapper mobile='column-reverse'>
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
          <S.BuiltBox>
            <h2>Product  was Built Specifically for You</h2>
            <div className='CardWrapper'>
              <CardOffer img={Arrow} title='First click tests'>
                <p>While most people enjoy casino gambling,</p>
              </CardOffer>
              <CardOffer img={Surveys} title='Design surveys'>
                <p>Sports betting, lottery and bingo playing for the fun.</p>
              </CardOffer>
              <CardOffer img={Heart} title='Preference tests'>
                <p>The Myspace page defines the individual.</p>
              </CardOffer>
              <CardOffer img={Time} title='Five second tests'>
                <p>Personal choices and the overall personality of the person.</p>
              </CardOffer>
            </div>
            <Button label='SIGN UP NOW' />
          </S.BuiltBox>
        </Container>
        <Container>
          <Wrapper mobile='column-reverse'>
            <S.PlansBox>
              <h5>Effortless Validation for</h5>
              <h2>Management</h2>
              <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
              <ul>
                <li>
                  <h6>Accessory makers</h6>
                  <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun.</p>
                </li>
                <li>
                  <h6>Alterationists</h6>
                  <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                </li>
              </ul>
            </S.PlansBox>
            <img src={Notes} alt='Notes Arquives' title='Notes Arquives' />
          </Wrapper>
        </Container>
        <Container>
          <Wrapper mobile='column'>
            <img src={Search} alt='Support' title='Support' />
            <S.SupTxt>
              <h6>Easier decision making for</h6>
              <h2>Customer Support</h2>
              <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
              <ul>
                <li>Never worry about overpaying for your energy again.</li>
                <li>We will only switch you to energy companies that we trust and will treat you right.</li>
                <li>We track the markets daily and know where the savings are.</li>
              </ul>
            </S.SupTxt>
          </Wrapper>
        </Container>
        <Container>
          <Wrapper mobile='column-reverse'>
            <S.PlansBox>
              <h5>Optimisation for</h5>
              <h2>Collaborative</h2>
              <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior.</p>
              <ul className='PlansList'>
                <li>
                  <h6>Accessory makers</h6>
                  <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun.</p>
                </li>
                <li>
                  <h6>Alterationists</h6>
                  <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                </li>
              </ul>
            </S.PlansBox>
            <img src={Photos} alt='Photos Archive' title='Photos Archive' />
          </Wrapper>
        </Container>
        <Container other='high'>
          <S.QuickBox>
            <h2>Quick & Easy Process</h2>
            <p>Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?</p>
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
          </S.QuickBox>
        </Container>
      </main>
    </>
  );
};