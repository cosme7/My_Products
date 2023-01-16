import React from 'react';
import * as S from './style';

export default function Title({children, ...rest}) {
  return (
    <S.Title {...rest}>
      {children}
    </S.Title>
  );
};
