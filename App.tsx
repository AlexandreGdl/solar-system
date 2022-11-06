import { ThemeProvider } from 'styled-components/native';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from './src/theme';
import { store } from './src/store';
import { DiscoverPage, HomePage, PlanetPage } from './src/pages';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Discover">
            <Stack.Screen
              name="Discover"
              options={{ headerShown: false }}
              component={DiscoverPage}
            />
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={HomePage}
            />
            <Stack.Screen
              name="Planet"
              options={{ headerShown: false }}
              component={PlanetPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </ThemeProvider>
  );
}
