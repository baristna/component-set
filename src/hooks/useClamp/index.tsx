import { useState, useEffect } from 'react';

export function useClamp<T extends number | number[]>(value:T, min?:number, max?:number):T {
  const [clampedValue, setClampedValue] = useState(value);

  const singleValueClamp = () => {
    if ((min !== undefined) && (value < min)) {
      setClampedValue(min as T);
    } else if (max !== undefined && (value > max)) {
      setClampedValue(max as T);
    } else {
      setClampedValue(value);
    }
  };

  const multipleValueClamp = () => {
    if (Array.isArray(value)) {
      let balanced = value.map(val => (min !== undefined && (val < min)) ? min : val);
      const total = balanced.reduce((a, c) => a + c);
      if ((max !== undefined) && (total > max)) {
        balanced = balanced.map(val => (max * (val / total)));
      }
      setClampedValue(balanced as T);
    }
  };

  useEffect(() => {
    if (typeof value === 'number') {
      singleValueClamp();
    } else {
      multipleValueClamp();
    }
  }, [value, min, max]);

  return clampedValue;
}
