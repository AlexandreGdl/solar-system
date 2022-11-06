import styled from 'styled-components/native';

/**
 * Title
 * Purpose : Use Title in header
 */
export default ({ children, style }: TitleProps) => {
  return <Title style={style}>{children}</Title>;
};

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
`;
