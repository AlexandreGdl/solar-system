type PlanetsListProps = {
  emptyText: string;
  pending: boolean;
  data: Planet[];
  onRefresh?: (() => void) | undefined;
  onItemPressed?: ((id: string) => void) | undefined;
};
