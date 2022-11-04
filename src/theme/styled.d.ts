import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: {
        primary: string;
        contrast: string;
        secondary: string;
      };
    };
    name: string;
  }
}
