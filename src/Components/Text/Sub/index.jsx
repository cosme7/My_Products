import React from 'react';
import * as S from './style';

export default function Sub({change='theme', children, ...rest}){
  return (
    <S.Sub change={change} {...rest}>
      {children}
    </S.Sub>
  );
};
