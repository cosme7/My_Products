import React from 'react'
import Button from '../Button'
import Image from '../../Assets/component_00.png'
import * as S from './style'

export default function CTA() {
  return (
    <>
        <S.Call>
            <div>
                <h2>Join 100 Compannies who boost their business with Product</h2>
                <Button label='Get This' inverted='true'/>
            </div>
            <img src={Image} alt="Graphics" title="Graphics" />
        </S.Call>
    </>
  )
}
