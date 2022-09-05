import styled from 'styled-components';
import Card from '../../common/Card';
import AskInfoThirdItem from './AskInfoThirdItem';

const Block = styled.div`
  @media (max-width: 820px) {
    display: none;
  }
`;

const AskInfoThird = () => {
  return (
    <Block>
      <Card width="314px" margin="0" padding="0">
        <AskInfoThirdItem />
      </Card>
    </Block>
  );
};

export default AskInfoThird;
