import React from 'react';
import Button from '../../Components/Button'
import Hero from '../../Assets/home_01.png'
import * as S from './style';

export default function Products() {
  return (
    <>
      <main>
        <S.Container>
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
      </main>
    </>
  );
};