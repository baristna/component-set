import React, { useState } from 'react';
import { Effect } from '..';
import { Div } from '../..';

export const TimeoutExample = (props:{timeout: number}):JSX.Element => {
  const [fade, setFade] = useState(true);

  return (
    <Div display='flex' mb={2} alignItems='center' height={'60px'}>
      <Div width='200px'>
        <button onClick={() => { setFade(!fade);}}>Toggle</button>
      </Div>
      <Div
        display='flex'
        width={'100px'}
        alignItems='center'
        justifyContent='center'
        bg='bg-secondary'
        height='60px'
        ml={4}
      >
        <Effect type='fade' timeout={props.timeout} in={fade}>
          <Div p={2} bg='info'>{typeof props.timeout === 'number' ? props.timeout : 'Obj'}</Div>
        </Effect>
      </Div>
    </Div>
  );
};
