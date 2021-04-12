import { useState } from 'react';

export function useArrayState<T>(initialState:T[]):([T[], (index:number, value:T) => void]) {
  const [arrayState, setArrayState] = useState<T[]>(initialState);

  const setAtIndex = (index:number, value:T):void => {
    const currentState:T[] = [...arrayState] || [];
    currentState[index] = value;
    setArrayState(currentState);
  };

  return [arrayState, setAtIndex];
}
