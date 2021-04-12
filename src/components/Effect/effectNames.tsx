import { effectValues } from './effectValues';

export const effectNames = Object.keys(effectValues()).reduce((acc, key) => (
  { ...acc, [key]: key }
), {});
