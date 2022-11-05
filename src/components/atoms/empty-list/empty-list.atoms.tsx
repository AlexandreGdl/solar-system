import React from 'react';
import styled from 'styled-components/native';

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
