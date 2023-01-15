import React from 'react';
import * as S from './style';

export default function Title({align, children, margin, mobile, width}) {
  return (
    <S.Title align={align} margin={margin} mobile={mobile} width={width}>
      {children}
    </S.Title>
  );
};
