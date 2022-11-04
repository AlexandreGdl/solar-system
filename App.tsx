import { ThemeProvider } from 'styled-components';
import React from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import theme from './src/theme';
import { store } from './src/store';
import { HomePage } from './src/pages';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <HomePage />
      </ReduxProvider>
    </ThemeProvider>
  );
}
