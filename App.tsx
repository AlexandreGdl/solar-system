import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import React, { StyleSheet, Text, View } from 'react-native';
import Test from './src';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Test />
        <StatusBar style="auto" />
      </View>
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
