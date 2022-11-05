import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Gap from '../../atoms/gap/gap.atoms';

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
  text-align-center;
`;
