import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, Text } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import { Template, Title } from '../components';
import { RootState } from '../store';
import { planetesAction } from '../features/planete/planeteAction';

export default () => {
  const theme = useContext(ThemeContext);
  const { planetes, pending } = useSelector(
    (state: RootState) => state.planetes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: planetesAction.PLANETES_FETCH_REQUESTED });
  }, [dispatch]);

  return (
    <Container>
      <Template>
        {pending ? <Loader color={theme.colors.text.primary} /> : <></>}
        <CustomTitle>Solar System</CustomTitle>
        <Text>{planetes.length}</Text>
      </Template>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

const Loader = styled(ActivityIndicator)`
  margin-top: 25px;
`;

const CustomTitle = styled(Title)`
  margin-top: 40px;
`;
