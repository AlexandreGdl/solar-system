import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Template, Header } from '../components';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Discover'>;
};

/**
 * Discover/Introduction Page function component
 * Purpose : Describe the application
 *
 * Improvement Idea: Add Animation on Discover press like swap or fade with rn-reanimated
 */
export default ({ navigation }: Props) => {
  /**
   * Redirect User to planetes list with replacement for no go back
   */
  function handleNavigation(): void {
    navigation.replace('Home');
  }

  return (
    <Background
      resizeMode="cover"
      source={require('../../assets/earth-space.png')}
    >
      <StatusBar style="light" />
      <Template>
        <Header title="Solar System" />
        <Description>
          Solar System is a Mobile App built with React-Native. It Display data
          about the planet that populate our solar system.
        </Description>
        <Button onPress={handleNavigation} activeOpacity={0.7}>
          <ButtonText>Discover More</ButtonText>
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

const Description = styled.Text`
  color: ${(props) => props.theme.colors.text.secondary};
  margin-top: 40px;
  font-size: 20px;
  line-height: 25px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.text.secondary};
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  border-radius: ${(props) => props.theme.radius};
  width: 44%;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text.contrast};
  font-weight: bold;
`;
