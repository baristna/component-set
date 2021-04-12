import { useEffect } from 'react';

const useEventSubscribe = (name: string, callback: (e:CustomEventInit) => void):void => {
  useEffect(() => {
    window.addEventListener(name, callback);
    return () => {
      window.removeEventListener(name, callback);
    };
  }, []);
};

export default useEventSubscribe;
