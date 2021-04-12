import { IEffectOptions, IEffectValues } from '../../types';

const effectValues = (options?: IEffectOptions):IEffectValues => ({
  fade: {
    hideStyles: `
      opacity: 0;
    `,
    showStyles: `
      opacity: 1;
    `,
  },
  scale: {
    hideStyles: `
      opacity: 0;
      transform: scale(0);
    `,
    showStyles: `
      opacity: 1;
      transform: scale(1);
    `,
  },
  slideRight: {
    hideStyles: `
      opacity: 0;
      transform: translateX(100%);
    `,
    showStyles: `
      opacity: 1;
      transform: translateX(0);
    `,
  },
  sign: {
    hideStyles: `
      opacity: 0;
      transform: perspective(200px) rotateX(90deg);
    `,
    showStyles: `
      opacity: 1;
      transform: perspective(200px) rotateX(0);
    `,
  },
  signReverse: {
    hideStyles: `
      opacity: 0;
      transform: perspective(200px) rotateX(-90deg);
    `,
    showStyles: `
      opacity: 1;
      transform: perspective(200px) rotateX(0);
    `,
  },
  scaleUpX: {
    hideStyles: `
      width: 0;
      flex: 0 0 0;
      overflow: hidden;
    `,
    showStyles: `
      width: ${options?.targetWidth || '300px'};
      flex: 0 0 ${options?.targetWidth || '300px'};
      overflow: hidden;
    `,
  },
  scaleUpY: {
    hideStyles: `
      height: 0;
      flex: 0 0 0;
      overflow: hidden;
    `,
    showStyles: `
      height: ${options?.targetHeight || '300px'};
      flex: 0 0 ${options?.targetHeight || '300px'};
      overflow: hidden;
    `,
  },
});

export { effectValues };
