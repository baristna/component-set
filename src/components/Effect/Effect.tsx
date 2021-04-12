import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IEffectProps } from '../../types';
import { EffectStyle, effectValues } from '.';

const Effect = (props:IEffectProps):JSX.Element => {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => { setVisibility(props.in); }, [props.in]);

  const timeoutObject = {
    enter: typeof props.timeout === 'number' ? props.timeout : props.timeout.enter,
    exit: typeof props.timeout === 'number' ? props.timeout : props.timeout.exit,
  };

  return (
    <CSSTransition
      in={visibility}
      timeout={props.timeout}
      onEnter={props.onEnter}
      onEntering={props.onEntering}
      onEntered={props.onEntered}
      onExit={props.onExit}
      onExiting={props.onExiting}
      onExited={props.onExited}
    >
      <EffectStyle
        timeout={timeoutObject}
        display={props.display}
        {...(
          effectValues(props.options)[props.type]
        )}
        className={props.className}
      >
        {props.children}
      </EffectStyle>
    </CSSTransition>
  );
};

Effect.defaultProps = {
  timeout: 300,
  display: 'inline-block',
  type: 'fade',
};

export default Effect;
