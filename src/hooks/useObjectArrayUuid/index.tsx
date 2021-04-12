import { useState } from 'react';
import uuid from 'react-uuid';

export function useObjectArrayUuid<T>(items:T[]):[Array<T & {uuid?: string}>, (arg0:T[]) => void] {
  const [enhancedItems, setEnhancedItems] = useState(
    items.map((item) => (
      { ...item, uuid: uuid() }
    ))
  );

  const handleUpdate = (updateItems:T[]) => {
    setEnhancedItems(updateItems.map((item) => ({ uuid: uuid(), ...item })));
  };

  return [enhancedItems, handleUpdate];
}
