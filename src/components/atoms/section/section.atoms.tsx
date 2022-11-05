import React from 'react';
import styled from 'styled-components/native';

export default ({ planet }: SectionProps) => {
  return (
    <Container activeOpacity={0.8}>
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
