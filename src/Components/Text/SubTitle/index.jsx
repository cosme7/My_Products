import React from 'react'
import * as S from './style'

export default function SubTitle({children, ...rest}) {
  return (
    <>
     <S.SubTitle {...rest}>
        {children}
     </S.SubTitle>
    </>
  )
}
