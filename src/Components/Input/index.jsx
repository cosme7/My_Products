import React from 'react'
import * as S from './style'

export default function Input({clr='inv',bg='none', shadow='sd', ...rest}) {
  return (
    <>
        <S.Input clr={clr} bg={bg} shadow={shadow}  {...rest}/>
    </>
  )
};
