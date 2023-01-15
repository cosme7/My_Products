import React from 'react';
import * as S from './style';

export default function Container({bg='bottom', other='top', children}) {
  return (
    <>
        <S.Container bg={bg} other={other}>
            {children}
        </S.Container>
    </>
  )
}
