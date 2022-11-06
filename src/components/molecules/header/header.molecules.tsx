import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Title from '../../atoms/title/title.atoms';

/**
 * Header
 * Purpose : Add title & return button
 */
export default ({ title, goBack }: HeaderProps) => {
  // Hate to do that for testing purpose
  const navigation = useNavigation();
  /**
   * Handle Going back
   */
  const handleGoBack = () => navigation.goBack();

  return (
    <Container testID="header">
      {goBack && (
        <Button onPress={handleGoBack}>
          <CustomText>Return</CustomText>
        </Button>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

// Avoiding Android Bad UI cause of no notch top
// Improvement : Add helper function to auto-detect notch
const Container = styled.View`
  height: ${Platform.OS === 'android' ? '100' : '70'}px;
  justify-content: flex-end;
`;

const CustomText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;

// Using padding so its easier to press the btn
const Button = styled.TouchableOpacity`
  padding: 10px 0;
`;
