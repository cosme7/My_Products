import React from 'react'
import * as S from './style'

export default function Wrapper({mobile, direction, gap, children}) {
  return (
    <>
     <S.Wrapper direction={direction} gap={gap} mobile={mobile}>
        {children}
     </S.Wrapper>
    </>
  )
}
