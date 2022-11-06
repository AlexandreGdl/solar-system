import React, { useContext } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import Section from '../../atoms/section/section.atoms';
import EmptyList from '../../atoms/empty-list/empty-list.atoms';

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
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={pending ? <EmptyList text={emptyText} /> : undefined}
      refreshControl={
        <RefreshControl
          refreshing={pending}
          onRefresh={onRefresh}
          tintColor={theme.colors.text.primary}
          colors={[theme.colors.text.primary]}
        />
      }
      numColumns={2}
      data={data}
      // Improvement: FIX TYPE ISSUE (Using styled transform auto typing to unknown)
      renderItem={(e) => renderItem(e as ListRenderItemInfo<Planet>)}
    />
  );
};
