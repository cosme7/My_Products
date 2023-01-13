import React from 'react';
import * as S from './style';

export default function Button({btnBorder='border', transparent='transp', inverted='invert', label}) {
  return (
    <>
        <S.Btn btnBorder={btnBorder} transparent={transparent} inverted={inverted}>
          {label}
        </S.Btn>
    </>
  );
};
