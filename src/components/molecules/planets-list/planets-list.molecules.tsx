import React, { useContext } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { EmptyList, Section } from '../..';

/**
 * Planets List
 * Purpose : Display a list of planet provided by props
 */
export default ({
  emptyText,
  data,
  onRefresh,
  pending,
  onItemPressed,
}: PlanetsListProps) => {
  const theme = useContext(ThemeContext);

  /**
   * Return a Section componenent for each planet in store
   * @param {ListRenderItemInfo<Planet>} param0 item
   * @returns {JSX.Element} Section
   */
  const renderItem = ({ item, index }: ListRenderItemInfo<Planet>) => (
    <Section onPress={onItemPressed} key={`section_${index}`} planet={item} />
  );

  return (
    <FlatList
      ListEmptyComponent={<EmptyList text={emptyText} />}
      refreshControl={
        <RefreshControl
          refreshing={pending}
          onRefresh={onRefresh}
          tintColor={theme.colors.text.primary}
          titleColor={theme.colors.text.primary}
        />
      }
      numColumns={2}
      data={data}
      // TODO: FIX TYPE ISSUE (Using styled transform auto typing to unknown)
      renderItem={(e) => renderItem(e as ListRenderItemInfo<Planet>)}
    />
  );
};
