import React from 'react'
import * as S from './style'

export default function SubTitle({align, children, mobile, margin}) {
  return (
    <>
     <S.SubTitle align={align} margin={margin} mobile={mobile}>
        {children}
     </S.SubTitle>
    </>
  )
}
