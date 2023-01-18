import React from 'react'
import * as S from './style'

export default function Input({clr='inv', shadow='sd', ...rest}) {
  return (
    <>
        <S.Input shadow={shadow} clr={clr} {...rest}/>
    </>
  )
};
