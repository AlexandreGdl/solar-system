import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListRenderItemInfo, RefreshControl } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import { Section, Template, Title } from '../components';
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

  const renderItem = ({ item, index }: ListRenderItemInfo<Planet>) => (
    <Section key={index} planet={item} />
  );

  return (
    <Container>
      <Template>
        {/* {pending ? <Loader color={theme.colors.text.primary} /> : <></>} */}
        <CustomTitle>Solar System</CustomTitle>
        <CustomInput
          onChangeText={setSearch}
          placeholderTextColor={theme.colors.text.primary}
          placeholder="Enter the name of a planet"
        />
        <CustomList
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
