import React from 'react';
import * as S from './style';

export default function Navigation({column='col', children}) {
  return (
    <>
      <S.Navigation column={column}>
          {children}
      </S.Navigation>
    </>
  );
};
