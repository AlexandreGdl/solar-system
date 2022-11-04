import { DefaultTheme } from 'styled-components';

const colors = {
  primary: 'blue',
  background: '#333333',
  text: {
    primary: '#fff',
    contrast: '#000',
    secondary: '#e1e1e1',
  },
};

const theme: DefaultTheme = {
  colors,
  name: 'Development',
};

export default theme;
