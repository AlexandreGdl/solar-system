import styled from 'styled-components/native';
import Title from '../../atoms/title/title.atoms';

export default ({ title, goBack, navigation }: HeaderProps) => {
  /**
   * Handle Going back
   */
  const handleGoBack = () => navigation.goBack();

  return (
    <Container>
      {goBack && (
        <Button onPress={handleGoBack}>
          <CustomText>Return</CustomText>
        </Button>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.View`
  height: 70px;
  justify-content: flex-end;
`;

const CustomText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;

// Using padding so its easier to press the btn
const Button = styled.TouchableOpacity`
  padding: 10px 0;
`;
