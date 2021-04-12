declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.ttf';

declare module 'react-uuid';

declare module 'react-transition-group';

declare module 'react-test-renderer';

declare module 'enzyme-adapter-react-16';

declare module 'hex-rgb';

declare module 'throttle-debounce';

declare module 'tinycolor2';

interface Window {
  Appcues?: {
    identify: (id: string, properties: {[key: string]: any}) => void;
    page: () => void;
  }
}

