import styled from 'styled-components/native';

/**
 * Gap
 * Purpose : Create some gap between element
 */
export default ({ gap }: GapProps) => {
  return <Gap gap={gap} />;
};

const Gap = styled.View<{ gap?: string }>`
  margin: ${(props) => (props.gap ? `${props.gap}px` : '10px')} 0;
`;
