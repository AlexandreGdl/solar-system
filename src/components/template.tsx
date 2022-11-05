import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  children: JSX.Element[] | JSX.Element | string | undefined;
  style?: StyleProp<ViewStyle>;
};

export default ({ children, style }: Props) => {
  return <AreaView style={style}>{children}</AreaView>;
};

const AreaView = styled.SafeAreaView`
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
`;
