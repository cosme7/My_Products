import React from 'react';
import * as S from './style';

export default function Sub({align, children, margin, mobile, width}) {
  return (
    <S.Sub align={align} margin={margin} mobile={mobile} width={width}>
      {children}
    </S.Sub>
  );
};
