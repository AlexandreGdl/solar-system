import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Gap from '../../atoms/gap/gap.atoms';

/**
 * Information
 * Purpose : Display line of information from label & value with gap
 * Improvement : Add Gap as props
 */
export default ({ label, value }: InformationProps) => {
  return (
    <View>
      <Gap gap="10" />
      <CustomText>
        {label} : {value}
      </CustomText>
    </View>
  );
};

const CustomText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;
