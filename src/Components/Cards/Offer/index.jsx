import React from 'react';
import * as S from './style';

export default function Offer({align, bd='border', img, title, children}) {
  return (
    <>
      <S.Card align={align} bd={bd}>
        <img src={img} alt={title} title={title}/>
        <h3>{title}</h3>
        {children}
      </S.Card>
    </>
  )
}
