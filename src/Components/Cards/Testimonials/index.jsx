import React from 'react'
import Sub from '../../Text/Sub'
import Stars from '../../../Assets/home_08-0.svg'
import * as S from './style';

export default function Testimonials({img}) {
  return (
    <>
      <S.Testimonials>
        <img src={Stars} alt="" />
        <Sub change='ok' width='27'>Product helps you see how many more days you need to work to reach your financial goal.</Sub>
        <div>
          <img src={img} alt="Testimonial" title="Testimonial" />
          <span>
            <h3>Wahid Ari</h3>
            <p>Designer</p>
          </span>
        </div>
      </S.Testimonials>
    </>
  );
};
