import React, { MouseEvent, useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { variant } from 'styled-system';
import uuid from 'react-uuid';
import { rippleEffectVariants } from '.';
import { IRipple, IRipplesState, IRippleHook, IRippleProps, rippleVariantType } from '../../types';
import { Div } from '../../components';

const animationDuration = 1000;

const RippleWrapper = styled(Div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const rippleKeyframes = keyframes`
  0% {width: 0%; padding-bottom: 0%; opacity: 1;}
  50% {width: 200%; padding-bottom: 200%;}
  100% {opacity: 0;}
`;

const RippleEffectStyle = styled(Div)<IRipple>(
  (() => (
    css`
      display: block;
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      opacity: 0;
      width: 200%;
      padding-bottom: 200%;
      transform: translate(-50%, -50%);
      animation-name: ${rippleKeyframes};
      animation-timing-function: ease-out;
      animation-duration: ${animationDuration}ms;
    `
  )),
  variant(rippleEffectVariants)
);

type ITimerRef = ReturnType<typeof setTimeout>
// Math.max() to prevent running an empty frame on load
const initTimer = setTimeout(() => null, Math.max());

RippleEffectStyle.defaultProps = {
  rippleVariant: 'default',
};

const RippleEffect = ({ x, y, rippleVariant, contrast }:IRipple) => (
  <RippleEffectStyle
    rippleVariant={rippleVariant + (contrast ? 'Contrast' : '') as rippleVariantType}
    style={{
      top: `${y}px`,
      left: `${x}px`,
    }}
  />
);

RippleEffect.defaultProps = {
  rippleVariant: 'default',
};

type useRippleType = (props?:IRippleProps) => IRippleHook

const useRippleEffect:useRippleType = (props?:IRippleProps) => {
  const timer = useRef<ITimerRef>(initTimer);
  const clearTm = () => timer && clearTimeout(timer.current);
  const [ripples, setRipples] = useState<IRipplesState>([]);
  const [toRemoveRippleId, setToRemoveRippleId] = useState<string>('');
  const [toAddRippleId, setToAddRippleId] = useState<string>('');

  // Clear timer at load and unload
  useEffect(() => {
    clearTm();
    return () => clearTm();
  }, []);

  useEffect(() => {
    if (!props?.disable) {
      setRipples(ripples.filter(({ id }) => id !== toRemoveRippleId));
    }
  }, [toRemoveRippleId]);

  useEffect(() => {
    if (!props?.disable) {
      timer.current = setTimeout(() => {
        setToRemoveRippleId(toAddRippleId);
      }, animationDuration + 100);
    }
  }, [toAddRippleId]);

  const handleMouseDown = (e: MouseEvent<HTMLElement>) => {
    if (!props?.disable) {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const ripX = e.clientX - rect.left;
      const ripY = e.clientY - rect.top;
      const rippleId = uuid();

      setRipples([
        ...ripples,
        {
          id: rippleId,
          RippleElement: () => (
            <RippleEffect
              x={ripX}
              y={ripY}
              contrast={props?.contrast}
              rippleVariant={props?.rippleVariant}
            />
          ),
        },
      ]);

      setToAddRippleId(rippleId);
    }
  };

  return [
    <RippleWrapper borderRadius={props?.borderRadius}>
      {ripples.map(({ id, RippleElement }) => (
        <RippleElement key={id} />
      ))}
    </RippleWrapper>,
    handleMouseDown,
  ];
};

export default useRippleEffect;
