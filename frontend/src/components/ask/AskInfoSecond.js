import styled from 'styled-components';
import Card from '../../common/Card';
import AskInfoSecondItem from './AskInfoSecondItem';

const Block = styled.div`
  @media (max-width: 820px) {
    display: none;
  }
`;

const AskInfoSecond = () => {
  return (
    <Block>
      <Card width="314px" padding="0" margin="2rem auto">
        <AskInfoSecondItem />
      </Card>
    </Block>
  );
};

export default AskInfoSecond;
