type HeaderProps = {
  title: string;
  goBack?: boolean;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >;
};
