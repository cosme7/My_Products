import React from 'react';
import * as S from './style';

export default function Prices({children, inverted='accent', operators, price, title}) {
  return (
    <>
      <S.Card inverted={inverted}>
        <h6>{title}</h6>
        <p>Brief price description</p>
          <div>
            <h2>{price}</h2>
            <p>Per / month</p>
          </div>
          <ul>
            <li>{operators}</li>
            <li>Notifications</li>
            <li>Landing Pages</li>
          </ul>
        {children}
      </S.Card>
    </>
  )
}
