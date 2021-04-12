import React, { useState } from 'react';
import { Effect } from '..';
import { Div } from '../..';

export const EventsExample = ():JSX.Element => {
  const [fade, setFade] = useState(true);
  const [state, setState] = useState('');

  return (
    <div>
      <div>Current State: {state}</div>
      <Div display='flex' mb={2} alignItems='center' height={'60px'}>
        <Div width='200px'>
          <button onClick={() => { setFade(!fade); }}>Toggle</button>
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
          <Effect
            in={fade}
            onEnter={() => setState('enter')}
            onEntering={() => setState('entering')}
            onEntered={() => setState('entered')}
            onExit={() => setState('exit')}
            onExiting={() => setState('exiting')}
            onExited={() => setState('exited')}
          >
            <Div p={2} bg='info'>{state}</Div>
          </Effect>

        </Div>
      </Div>
    </div>
  );
};
