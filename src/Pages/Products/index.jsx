import React from 'react';
import Button from '../../Components/Button';
import CardOffer from '../../Components/CardOffer';
import Hero from '../../Assets/home_01.png';
import Arrow from '../../Assets/home_02-1.svg';
import Surveys from '../../Assets/home_02-2.svg';
import Heart from '../../Assets/home_02-3.svg';
import Time from '../../Assets/home_02-4.svg';
import * as S from './style';

export default function Products({background='normal'}) {
  return (
    <>
      <main>
        <S.Container background='normal'>
          <S.WorkBox>
            <S.WorkTxt>
              <h2>Work at the speed of thought</h2>
              <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
              <div>
                <Button label='Get Started' />
                <Button transparent='transparent' label='▶ Watch the Video' />
              </div>
            </S.WorkTxt>
            <img src={Hero} alt='People Talking' title='People Talking' />  
          </S.WorkBox>
        </S.Container>
        <S.Container>
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
        </S.Container>
      </main>
    </>
  );
};