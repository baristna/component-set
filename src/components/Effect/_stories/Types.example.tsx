import React from 'react';
import { Effect, effectNames } from '..';
import { Div } from '../..';
import { useArrayState } from '../../../hooks';
import { IEffectTypes } from '../../../types';

export const TypesExample = ():JSX.Element => {
  const [fadeArray, setFadeArray] = useArrayState((new Array(5).fill(true)));

  return (
    <div>
      {Object.entries(effectNames).map(([key], index) => (
        <Div display='Div' mb={2} alignItems='center' height={'60px'} key={key}>
          <Div width='200px'>
            <button onClick={() => { setFadeArray(index, !fadeArray[index]); }}>Toggle</button>
          </Div>
          <Div
            display='Div'
            width={'300px'}
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
            bg='bg-secondary'
            height='60px'
            ml={4}
            onClick={() => { setFadeArray(index, !fadeArray[index]);}}
          >
            <Effect type={(key as IEffectTypes)} timeout={300} in={fadeArray[index]}>
              <Div p={2} bg='info'>{key}</Div>
            </Effect>
          </Div>
        </Div>
      ))}
    </div>
  );
};
