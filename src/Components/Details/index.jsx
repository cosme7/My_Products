import React from 'react';
import * as S from './style';

export default function Details({title, children}) {
  return (
    <>
        <S.Details>
            <summary>{title}</summary>
            {children}
        </S.Details>
    </>
  )
};
