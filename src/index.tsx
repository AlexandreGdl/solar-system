import React from 'react';
import styled from 'styled-components/native';
import type { RootState } from './store';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native';

const StyledView = styled.View`
  background-color: papayawhip;
  align-items: center;
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
`;

export default () => {
  const { planetes, loading } = useSelector(
    (state: RootState) => state.planetes
  );
  const dispatch = useDispatch();

  /**
   * Function that handle incrementation
   */
  const handlePlanetes = () => {
    dispatch({ type: 'PLANETES_FETCH_REQUESTED' });
  };

  return (
    <StyledView>
      <Button title="Get Planetes" onPress={handlePlanetes} />
      {loading && <StyledText>Loadiiing</StyledText>}
      <StyledText>{planetes.length}</StyledText>
    </StyledView>
  );
};
