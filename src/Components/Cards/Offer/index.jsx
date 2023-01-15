import React from 'react';
import * as S from './style';

export default function Offer({img, title, children}) {
  return (
    <>
      <S.Card>
        <img src={img} alt={title} title={title}/>
        <h3>{title}</h3>
        {children}
      </S.Card>
    </>
  )
}
