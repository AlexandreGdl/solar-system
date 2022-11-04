import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import React, { StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import Test from './src';
import theme from './src/theme';
import { store } from './src/store';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <View style={styles.container}>
          <Test />
          <StatusBar style="auto" />
        </View>
      </ReduxProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
