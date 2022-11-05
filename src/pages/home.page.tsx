import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListRenderItemInfo, RefreshControl } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import { EmptyList, Section, Template, Title } from '../components';
import { RootState } from '../store';
import { planetesAction } from '../features/planete/planeteAction';

export default () => {
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
   * Return a Section componenent for each planet in store
   * @param {ListRenderItemInfo<Planet>} param0 item
   * @returns {JSX.Element} Section
   */
  const renderItem = ({ item, index }: ListRenderItemInfo<Planet>) => (
    <Section key={index} planet={item} />
  );

  /**
   * Return a text based on the current situation, depending on search & fetched planetes
   * @returns {string} text to display
   */
  const getEmptyText = () =>
    search.trim().length > 0 && planetes.length > 0
      ? 'No planet match your search'
      : 'Could not retreive planet from API, scroll to re-fresh';

  return (
    <Container>
      <Template>
        <CustomTitle>Solar System</CustomTitle>
        <CustomInput
          onChangeText={setSearch}
          placeholderTextColor={theme.colors.text.primary}
          placeholder="Enter the name of a planet"
        />
        <CustomList
          ListEmptyComponent={<EmptyList text={getEmptyText()} />}
          refreshControl={
            <RefreshControl
              refreshing={pending}
              onRefresh={fetchPlanetes}
              tintColor={theme.colors.text.primary}
              titleColor={theme.colors.text.primary}
            />
          }
          numColumns={2}
          data={planetes.filter((v) =>
            v.name.toLowerCase().includes(search.toLowerCase())
          )}
          // TODO: FIX TYPE ISSUE (Using styled transform auto typing to unknown)
          renderItem={(e) => renderItem(e as ListRenderItemInfo<Planet>)}
        />
      </Template>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

const CustomList = styled.FlatList`
  margin-top: 20px;
`;

const CustomTitle = styled(Title)`
  margin-top: 40px;
`;

const CustomInput = styled.TextInput`
  margin: 10px 0;
  color: ${(props) => props.theme.colors.text.primary};
  border-bottom-color: ${(props) => props.theme.colors.text.primary};
  border-bottom-width: 1px;
  padding-bottom: 5px;
`;
