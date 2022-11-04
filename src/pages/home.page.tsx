import { StatusBar } from 'expo-status-bar';
import React from 'react-native';
import styled from 'styled-components/native';

const Background = styled.ImageBackground`
  flex: 1;
`;

const AreaView = styled.SafeAreaView`
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
`;

const Title = styled.Text`
  font-size: 30pt;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
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

/**
 * Home Page function component
 * Purpose : Describe the application
 */
export default () => {
  return (
    <Background
      resizeMode="cover"
      source={require('../../assets/earth-space.png')}
    >
      <StatusBar style="light" />
      <AreaView>
        <Title>Solar System</Title>
        <Description>
          Solar System is a Mobile App built with React-Native. It Display data
          about the planet that populate our solar system.
        </Description>
        <Button activeOpacity={0.7}>
          <ButtonText>Discover</ButtonText>
        </Button>
      </AreaView>
    </Background>
  );
};
