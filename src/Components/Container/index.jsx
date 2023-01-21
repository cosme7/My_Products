import React from 'react';
import * as S from './style';

export default function Container({bg='bottom', gd='gradient', other='top', children}) {
  return (
    <>
        <S.Container bg={bg} gd={gd} other={other}>
            {children}
        </S.Container>
    </>
  )
}
