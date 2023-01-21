import React from 'react';
import * as S from './style';

export default function Container({bg='bottom', gd='gradient', gr='accent', other='top', children}) {
  return (
    <>
        <S.Container bg={bg} gd={gd} gr={gr} other={other}>
            {children}
        </S.Container>
    </>
  )
}
