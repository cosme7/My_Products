import React from 'react';
import * as S from './style';

export default function Navigation({column='col', hover='foc', hidden='hide', mobile='cel', children}) {
  return (
    <>
      <S.Navigation mobile={mobile} hidden={hidden} column={column} hover={hover}>
          {children}
      </S.Navigation>
    </>
  );
};
