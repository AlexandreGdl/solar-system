import { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components/native';
import { Header, PlanetsList, Template } from '../components';
import { RootState } from '../store';
import { planetesAction } from '../features/planete/planeteAction';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

/**
 * Home Page
 * Purpose : Display the list of the planet
 */
export default ({ navigation }: Props) => {
  const theme = useContext(ThemeContext);
  const { planetes, pending } = useSelector(
    (state: RootState) => state.planetes
  );
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>('');

  const fetchPlanetes = useCallback(() => {
    dispatch({ type: planetesAction.PLANETES_FETCH_REQUESTED });
  }, [dispatch]);

  useEffect(() => {
    fetchPlanetes();
  }, [fetchPlanetes]);

  /**
   * Return a text based on the current situation, depending on search & fetched planetes
   * @returns {string} text to display
   */
  const getEmptyText = () =>
    search.trim().length > 0 && planetes.length > 0
      ? 'No planet match your search'
      : 'Could not retreive planet from API, scroll to re-fresh';

  const goToPlanet = useCallback(
    (id: string) => {
      navigation.navigate('Planet', { id });
    },
    [navigation]
  );

  return (
    <Container>
      <Template>
        <Header title="Solar System" />
        <CustomInput
          onChangeText={setSearch}
          placeholderTextColor={theme.colors.text.primary}
          placeholder="Enter the name of a planet"
        />
        <CustomList
          data={planetes.filter((v) =>
            v.name.toLowerCase().includes(search.trim().toLowerCase())
          )}
          pending={pending}
          onRefresh={fetchPlanetes}
          emptyText={getEmptyText()}
          onItemPressed={goToPlanet}
        />
      </Template>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

const CustomList = styled(PlanetsList)`
  margin-top: 20px;
`;

const CustomInput = styled.TextInput`
  margin: 10px 0;
  color: ${(props) => props.theme.colors.text.primary};
  border-bottom-color: ${(props) => props.theme.colors.text.primary};
  border-bottom-width: 1px;
  padding-bottom: 5px;
`;
