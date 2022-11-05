import styled from 'styled-components/native';
import { Template, Title } from '../components';

export default () => {
  return (
    <Container>
      <Template>
        <CustomTitle>Mars</CustomTitle>
      </Template>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const CustomTitle = styled(Title)`
  margin-top: 40px;
`;
