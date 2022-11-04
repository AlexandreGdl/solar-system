import { ThemeProvider } from 'styled-components';
import React from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from './src/theme';
import { store } from './src/store';
import { DiscoverPage } from './src/pages';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Discover"
              options={{ headerShown: false }}
              component={DiscoverPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </ThemeProvider>
  );
}
