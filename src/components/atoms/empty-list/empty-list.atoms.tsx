import styled from 'styled-components/native';

/**
 * Empy List
 * Purpose : Display text when a list is empty
 * Improvement : Delete this compoennt, not that much usefull
 */
export default ({ text }: EmptyListProps) => {
  return (
    <Container>
      <CustomText>{text}</CustomText>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const CustomText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: bold;
  text-align: center;
`;
