import React from 'react';
import styled from "styled-components/native";

const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
`;

export default () => {
  return (
    <StyledView>
      <StyledText>Hello World!</StyledText>
    </StyledView>
  );
};
