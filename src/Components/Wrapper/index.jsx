import React from 'react'
import * as S from './style'

export default function Wrapper({children, img='image', ...rest}) {
  return (
    <>
     <S.Wrapper img={img} {...rest}>
        {children}
     </S.Wrapper>
    </>
  )
}
