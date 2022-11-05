import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: {
        primary: string;
        contrast: string;
        secondary: string;
      };
    };
    radius: string;
    name: string;
  }
}
