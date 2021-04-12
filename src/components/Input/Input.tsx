import React, { forwardRef, useState, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { Div } from '../Div';
import { Button } from '../Button';
import {
  IInputProps,
  IInputStates,
  StyledThemeType,
  oneOfColorType,
} from '../../types';

const Wrapper = styled(Div)<IInputProps>`
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  ${p => p.disabled ? `
    opacity: 0.5;
    pointer-events: none;
  ` : ``}
`;

const Content = styled(Div)<IInputProps>`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

const InputWrapper = styled(Div)<IInputProps>`
  flex: 1 1 auto;
  height: 100%;
`;

const ControlInput = styled(Div).attrs(() => ({ as: 'input' }))<IInputProps>`
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
`;

const ControlTextarea = styled(Div).attrs(() => ({ as: 'textarea' }))<IInputProps>`
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  resize: none;
`;

const Legend = styled(Div).attrs(() => ({ as: 'legend' }))<IInputProps>`
  height: 20px;
`;

const FieldSet = styled(Div).attrs(() => ({ as: 'fieldset' }))<IInputProps>`
  position: absolute;
  pointer-events: none;
  top: -9px;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0;
  z-index: 1;

  ${Legend} {
    color: transparent;
    padding: 0 5px;
  }
`;

const LabelWrapper = styled(Div)<IInputStates>`
  position: absolute;
  padding: 0 5px;
  pointer-events: none;
  transition: all 0.2s;
  ${p => p.isActive ? `
    left: 10px;
    top: -10px;
  ` : `
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  `}
`;

const Border = styled(Div)<IInputStates>`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Input = forwardRef<HTMLInputElement, IInputProps>(({
  name,
  value,
  multiline,
  onChange,
  active,
  focused,
  disabled,
  error,
  success,
  label,
  icon,
  onIconClick,
  placeholder,
  borderRadius = 2,
  bg = 'transparent',
  ...props
}, ref) => {
  const theme = useTheme() as StyledThemeType;
  const [isActive, setIsActive] = useState(active);
  const [isFocused, setIsFocused] = useState(focused);

  const genColor = (def:oneOfColorType) => error ? 'error' : success ? 'success' : def;
  const labelText = <Legend color={genColor(isFocused ? 'primary' : 'text')}>{label}</Legend>;

  useEffect(() => {
    setIsFocused(focused);
  }, [focused]);

  useEffect(() => {
    setIsActive(Boolean(isFocused || active || value));
  }, [isFocused, active, value]);

  const handleOnFocus = () => { setIsFocused(true); };
  const handleOnBlur = () => { setIsFocused(false); };

  const borderGenerator = () => {
    const colorName = disabled ? 'disabled' : genColor(isFocused ? 'primary' : 'border');
    const getColor = theme.colors[colorName];
    const wrapperActive = label ? 'none' : `2px solid ${getColor}`;

    return {
      wrapper: isActive ? wrapperActive : `1px solid ${getColor}`,
      fieldset: isActive ? `2px solid ${getColor}` : 'none',
    };
  };

  return (
    <Wrapper
      bg={bg}
      width={'240px'}
      height={5}
      borderRadius={borderRadius}
      disabled={disabled}
      {...props}
    >
      <Border
        borderRadius={borderRadius}
        border={borderGenerator().wrapper}
      />
      {label && (
        <FieldSet
          borderRadius={borderRadius}
          border={borderGenerator().fieldset}
        >
          {labelText}
        </FieldSet>
      )}
      <Content>
        <InputWrapper>
          {multiline ? (
            <ControlTextarea
              name={name}
              value={value}
              placeholder={placeholder}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              onChange={onChange}
              disabled={disabled}
              py={5 / 4}
              pl={2}
              pr={icon ? 0 : 2}
              ref={ref}
              bg={bg}
            />
          ) : (
            <ControlInput
              name={name}
              value={value}
              placeholder={placeholder}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              onChange={onChange}
              disabled={disabled}
              py={5 / 4}
              pl={2}
              pr={icon ? 0 : 2}
              ref={ref}
              bg={bg}
            />
          )}
        </InputWrapper>
        {icon && (
          <Button
            cut='ghost'
            variant='secondary'
            before={icon}
            mr={1}
            circle
            onClick={() => { onIconClick && onIconClick({ name, value }); }}
          />
        )}
      </Content>
      {label && (
        <LabelWrapper isActive={isActive} isFocused={isFocused}>
          {labelText}
        </LabelWrapper>
      )}
    </Wrapper>
  );
});

export default Input;
