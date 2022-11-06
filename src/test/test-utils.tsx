import React, { ComponentType } from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../theme';

// Create Custom Render with theme provider
const render = (ui: any) => {
  // @ts-ignore
  const Wrapper = ({ children }): ComponentType => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  // @ts-ignore
  return rtlRender(ui, { wrapper: Wrapper });
};

export * from '@testing-library/react-native';
// override React Testing Library's render with our own
export { render };

// Export to mock navigation
export const useNavigationMock = useNavigation as jest.MockedFunction<
  typeof useNavigation
>;
