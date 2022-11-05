import { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { getPlaneteById } from '../api/planetes';
import { Header, PlanetInformation, Template } from '../components';
import { RootState } from '../store';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Planet'>;
  route: RouteProp<RootStackParamList, 'Planet'>;
};

export default ({ navigation, route }: Props) => {
  const [planet, setPlanet] = useState<undefined | Planet>(undefined);
  const { planetes, pending } = useSelector(
    (state: RootState) => state.planetes
  );
  const [loading, setLoading] = useState(true);

  /**
   * Retreive planet from redux store, if not find, API Fetch
   * If no planet retreive show not found
   */
  const getPlanet = useCallback(async () => {
    let newPlanete = planetes.find((p) => p.id === route.params.id);
    // If not found in store, search in api
    if (!newPlanete) {
      newPlanete = await getPlaneteById(route.params.id);
    }
    setPlanet(newPlanete);
    setLoading(false);
  }, [route, planetes]);

  /**
   * Basic Function that go back.
   * Not checking canGoBack() because we don't have notification or other way to
   * go directly to this page without coming from home or other screen
   */
  useEffect(() => {
    getPlanet();
  }, [getPlanet]);

  if (loading || pending) {
    return (
      <Container>
        <CustomTemplate>
          <Loader />
          <CustomText>Loading</CustomText>
        </CustomTemplate>
      </Container>
    );
  }

  /**
   * Not Happy with the look it has
   */
  return (
    <Container>
      <Template>
        <Header
          goBack
          navigation={navigation}
          title={planet ? planet.name : 'Planet not found :('}
        />
        {planet ? <PlanetInformation planet={planet} /> : <View />}
      </Template>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

const CustomTemplate = styled(Template)`
  justify-content: center;
  align-items: center;
`;

const Loader = styled.ActivityIndicator`
  margin-bottom: 20px;
`;

const CustomText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  text-align-center;
`;
