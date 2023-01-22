import React from 'react';
import { Link } from 'react-router-dom';
//* Components
import Container from '../../Components/Container'
import Wrapper from '../../Components/Wrapper';
import Title from '../../Components/Text/Title';
import SubTitle from '../../Components/Text/SubTitle';
import Sub from '../../Components/Text/Sub';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Strats from '../../Components/Cards/Strats';
//* Image's
import Mobile from '../../Assets/resources_01-0.png';
import Config from '../../Assets/resources_01-1.png';
import People from '../../Assets/resources_01-2.svg';
import Talk from '../../Assets/resources_02-1.png';
import Brainstorm from '../../Assets/resources_02-2.png';
import Adjust from '../../Assets/resources_02-3.png';
import Notes from '../../Assets/resources_02-4.png';
import Writing from '../../Assets/resources_02-5.png';
import Thinking from '../../Assets/resources_02-6.png';
import Instagram from '../../Assets/resources_03-1.svg';
import Facebook from '../../Assets/resources_03-2.svg';
import Twitter from '../../Assets/resources_03-3.svg';
import Location from '../../Assets/resources_03-4.png';
import Map from '../../Assets/resources_03-5.png';
//* Style's
import * as S from './style';

export default function Resources() {
  return (
    <>
      <main>
        <Container>
          <Wrapper mobile='column' gap='1' align='center'>
            <S.BusinessBox>
              <Title width='16'>Great Business made with Product.</Title>
              <Sub width='45'>Build better customer relationships easily messaging that provides a more personal experience for you and your customers.</Sub>
              <form>
                <Input bg='ok' name='email' type='email' placeholder='Enter your email adress' />
                <Button label='Join Now' />
              </form>
              <div>
                <img src={People} alt="People" title='People' />
                <p>Join over <span>4,000+</span> other</p>
              </div>
            </S.BusinessBox>
            <S.Picture>
              <source srcSet={Mobile} media='(max-width: 53em)' />
              <img src={Config} alt="Data Files" title="Data Files" />
            </S.Picture>
          </Wrapper>
        </Container>
        <Container>
          <Wrapper direction='column' align='center'>
            <Title>Latest Stories</Title>
            <Sub align='center'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</Sub>
            <S.StoriesGrid>
              <Strats img={Talk} title='Increasing Prosperity With Positive Thinking' />
              <Strats img={Brainstorm} title='Motivation Is The First Step To Success' />
              <Strats img={Adjust} title='Success Steps For Your Personal Or Business' />
              <Strats img={Notes} title='Increasing Prosperity With Positive Thinking' />
              <Strats img={Writing} title='Motivation Is The First Step To Success' />
              <Strats img={Thinking} title='Success Steps For Your Personal Or Business' />
              <Link to='/'>More Stories</Link>
            </S.StoriesGrid>
          </Wrapper>
        </Container>
        <Container>
          <Wrapper direction='column' align='center'>
            <Title>Contact Us</Title>
            <Sub align='center' width='28'>Need more detailed information? Get in touch with us.</Sub>
            <S.Figure>
              <a href='https://www.instagram.com' target='_blank' rel="noreferrer" >
                <img src={Instagram} alt="Instagram" title="Instagram" />
              </a>
              <a href='https://www.facebook.com' target='_blank' rel="noreferrer" >
                <img src={Facebook} alt="Facebook" title="Facebook" />
              </a>
              <a href='https://www.twitter.com' target='_blank' rel="noreferrer" >
                <img src={Twitter} alt="Twitter" title="Twitter" />
              </a>
            </S.Figure>
            <S.Img>
              <source srcSet={Map} media='(max-width: 53em)' />
              <img src={Location} alt="Map Location" title="Location" />
            </S.Img>
            <S.Form>
              <SubTitle align='center'>Send a message</SubTitle>
              <Input clr='ok' name='name' type='name' placeholder='Your Name' />
              <Input clr='ok' name='email' type='email' placeholder='Your Email' />
              <textarea cols="30" rows="8" placeholder='Your Message' />
              <Button label='Send' />
            </S.Form>
          </Wrapper>
        </Container>
      </main>
    </>
  );
};
