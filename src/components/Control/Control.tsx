import React, { useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Div } from '../Div';
import {
  IconCheckChecked,
  IconCheckUnchecked,
  IconCheckIndeterminate,
  IconRadioChecked,
  IconRadioUnchecked,
} from '../../icons';
import { IControlProps, IControlOnChange, IControlInput } from '../../types';

const Visual = styled(Div)<{ type: string; isChecked?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 2px solid transparent;
  
  ${p => p.type === 'checkbox' ? `
    border-radius: 8px;
  ` : `
    border-radius: 16px;
  `}
`;

const Switch = styled(Div)<{ isChecked?: boolean }>`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  margin: 6px;

  ${p => p.isChecked ? `
    background: ${p.theme.colors.primary};
  ` : `
    background: ${p.theme.colors.disabled};
  `}
`;

const SwitchThumb = styled(Div)<{ isChecked?: boolean }>`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${p => p.theme.colors.white};

  ${p => p.isChecked ? `
    left: 20px;
    border: 2px solid ${p.theme.colors.primary};
  ` : `
    left: 0;
    border: 2px solid ${p.theme.colors.secondary};
  `}
  transition: left 0.3s;
`;

const Wrapper = styled(Div)<{ type: string; isChecked?: boolean }>`
  position: relative;
  display: inline-block;

  ${p => p.type === 'switch' ? `
    border-radius: 16px;
  ` : `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    ${p.type === 'checkbox' ? `
      border-radius: 8px;
    ` : `
      border-radius: 16px;
    `}
  `}

  &:hover {
    background: ${p => p.isChecked ? p.theme.colors.primaryLight : p.theme.colors.secondaryLight}   
  }
`;

const Input = styled(p => <input {...p} type='checkbox' />)<IControlInput>`
  cursor: pointer;
  margin: 0;
  position: absolute;
  opacity: 0;
  background: #aff;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  &:focus + ${Visual} {
    border-color: ${p => p.theme.colors[p.checked ? 'primary' : 'secondary']}
  }
`;

const Control = ({
  type,
  id,
  value,
  checked,
  onChange,
}: IControlProps):JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (type === 'radio') {
      setIsChecked(checked === value);
    } else {
      setIsChecked(checked as boolean);
    }
  }, [checked]);

  const renderIcon = () => {
    const iconsData = {
      checkbox: {
        indeterminate: <IconCheckIndeterminate color={isChecked ? 'primary' : 'secondary'} />,
        checked: <IconCheckChecked color={isChecked ? 'primary' : 'secondary'} />,
        unchecked: <IconCheckUnchecked color={isChecked ? 'primary' : 'secondary'} />,
      },
      radio: {
        checked: <IconRadioChecked color={isChecked ? 'primary' : 'secondary'} />,
        unchecked: <IconRadioUnchecked color={isChecked ? 'primary' : 'secondary'} />,
      },
    };

    return iconsData[type][isChecked ? 'checked' : 'unchecked'];
  };

  return (
    <Wrapper
      type={type}
      isChecked={isChecked}
    >
      {type === 'switch'
        ? (
          <Switch isChecked={isChecked}>
            <SwitchThumb isChecked={isChecked} />
          </Switch>
        )
        : renderIcon()
      }
      <Input
        id={id}
        checked={isChecked}
        onChange={(e:ChangeEvent<HTMLInputElement>) => {
          (onChange as IControlOnChange<typeof checked>)(
            ((type === 'radio') ? value as string : e.currentTarget.checked)
          );
        }}
      />
      <Visual type={type} isChecked={isChecked} />
    </Wrapper>
  );
};

export default Control;
