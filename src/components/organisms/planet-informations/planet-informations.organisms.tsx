import { View } from 'react-native';
import Information from '../../molecules/information/information.atoms';

/**
 * Planet Information
 * Purpose : Display many information about a planet
 */
export default ({ planet }: PlanetInformationProps) => (
  <View>
    <Information label="Lunes" value={(planet.moons ?? []).length.toString()} />
    <Information label="English Name" value={planet.englishName} />
    <Information label="Rayon" value={`${planet.meanRadius} km`} />
    <Information label="Average Temperature" value={`${planet.avgTemp}°K`} />
  </View>
);
