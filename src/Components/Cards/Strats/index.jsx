import React from 'react';
import * as S from './style';

export default function Strats({img, title}) {
  return (
    <>
      <S.Card>
        <img src={img} alt={title} title={title} />
        <div>
          <p>By <strong>Wahid Ari</strong> | 03 March 2019</p>
          <h6>{title}</h6>
        </div>
      </S.Card>
    </>
  )
}
