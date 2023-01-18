import React from 'react';
import * as S from './style';

export default function Navigation({column='col', hover='focus', children}) {
  return (
    <>
      <S.Navigation column={column} hover={hover}>
          {children}
      </S.Navigation>
    </>
  );
};
