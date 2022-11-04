import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: JSX.Element[] | JSX.Element | string;
};

export default ({ children }: Props) => {
  return <AreaView>{children}</AreaView>;
};

const AreaView = styled.SafeAreaView`
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
`;
