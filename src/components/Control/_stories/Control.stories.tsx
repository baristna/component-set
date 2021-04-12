import React, { useState } from 'react';
import { Div } from '../../Div';
import { Control } from '..';
import { IControlProps } from '../../../types';

export default {
  title: 'Components/Control',
  component: Control,
  argTypes: {
    type: {
      defaultValue: 'checkbox',
    },
  },
};

export const withControls = (args: IControlProps) => {
  const [chk1, setChk1] = useState<boolean>(false);
  const [chk2, setChk2] = useState<boolean>(false);

  const [radio1, setRadio1] = useState<string>();

  return (
    <Div>
      {args.type === 'radio' ? (
        <Div mb={2}>
          Radio Group 1: {radio1 === 'true' ? 'y' : 'n'}
          <Div>
            <Control id='rd1' value='true' checked={radio1} onChange={setRadio1} type='radio' />
          </Div>
          <Div>
            <Control id='rd2' value='false' checked={radio1} onChange={setRadio1} type='radio' />
          </Div>
        </Div>
      ) : (
        <Div>
          <Div>
            <Control {...args} id='chk1' checked={chk1} onChange={setChk1} />
          </Div>
          <Div>
            <Control {...args} id='chk2' checked={chk2} onChange={setChk2} />
          </Div>
        </Div>
      )}
    </Div>
  );
};
