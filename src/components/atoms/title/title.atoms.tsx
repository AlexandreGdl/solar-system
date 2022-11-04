import React from 'react';
import styled from 'styled-components/native';

export default ({ children, style }: TitleProps) => {
  return <Title style={style}>{children}</Title>;
};

const Title = styled.Text`
  font-size: 30pt;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
`;
