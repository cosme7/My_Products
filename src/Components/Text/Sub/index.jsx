import React from 'react';
import * as S from './style';

export default function Sub({children, ...rest}){
  return (
    <S.Sub {...rest}>
      {children}
    </S.Sub>
  );
};
