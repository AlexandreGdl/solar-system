import { StatusBar } from 'expo-status-bar';
import React from 'react-native';
import styled from 'styled-components/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Title, Template } from '../components';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

/**
 * Home Page function component
 * Purpose : Describe the application
 *
 * Improvement Idea: Add Animation on Discover press like swap or fade with rn-reanimated
 */
export default (props: Props) => {
  /**
   * Redirect User to planetes list with replacement for no go back
   */
  function handleNavigation(): void {
    props.navigation.replace('Home');
  }

  return (
    <Background
      resizeMode="cover"
      source={require('../../assets/earth-space.png')}
    >
      <StatusBar style="light" />
      <Template>
        <CustomTitle>Solar System</CustomTitle>
        <Description>
          Solar System is a Mobile App built with React-Native. It Display data
          about the planet that populate our solar system.
        </Description>
        <Button onPress={handleNavigation} activeOpacity={0.7}>
          <ButtonText>Discover</ButtonText>
        </Button>
      </Template>
    </Background>
  );
};

// Non-reused component / restyled component

const Background = styled.ImageBackground`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

// With this we are able to override existing style
const CustomTitle = styled(Title)`
  margin-top: 40px;
`;

const Description = styled.Text`
  color: ${(props) => props.theme.colors.text.secondary};
  margin-top: 40px;
  font-size: 20pt;
  line-height: 28pt;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.text.secondary};
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  border-radius: 8px;
  align-self: start;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text.contrast};
  font-weight: bold;
  font-size: 18pt;
`;
