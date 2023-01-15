import React from 'react'
import * as S from './style'

export default function Wrapper({align, children, direction, gap, img='image', mobile}) {
  return (
    <>
     <S.Wrapper align={align} direction={direction} gap={gap} img={img} mobile={mobile}>
        {children}
     </S.Wrapper>
    </>
  )
}
