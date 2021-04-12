import { useState, useCallback } from 'react';
import uuidFn from 'react-uuid';

export interface IuseUuidProps {
  uuid: string;
  generateUuid: () => void;
}

const useUuid = (): IuseUuidProps => {
  const [uuid, updateUuid] = useState(uuidFn());
  const generateUuid = useCallback(() => {
    updateUuid(uuidFn());
  }, [updateUuid]);
  return { uuid, generateUuid };
};

export { useUuid };
