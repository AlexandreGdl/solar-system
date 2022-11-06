import styled from 'styled-components/native';

/**
 * Section
 * Purpose : Small information about planet that handle press
 */
export default ({ planet, onPress }: SectionProps) => {
  /**
   * Handle when section item is pressed
   */
  const handlePressed = () => {
    if (onPress) {
      onPress(planet.id);
    }
  };

  return (
    <Container onPress={handlePressed} activeOpacity={0.8}>
      <CustomText>{planet.name}</CustomText>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: #636363;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: ${(props) => props.theme.radius};
`;

const CustomText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;
