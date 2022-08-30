import styled from 'styled-components';
import FilterItem from './FilterItem';
import FilterInput from './FilterInput';

const Container = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  margin: 4px 0;
  font-size: 16px;
  font-weight: 600;
`;

const InputContainer = styled.div`
  margin-top: 8px;
  margin-left: 24px;
`;

const ThirdFilter = () => {
  const data = {
    title: 'Tagged with',
    items: [
      { label: 'My watched tags', checked: false },
      { label: 'The following tags:', checked: true },
    ],
  };

  return (
    <Container>
      <Title>{data.title}</Title>
      {data.items.map((item, idx) => {
        return (
          <FilterItem
            key={idx}
            text={item.label}
            type="radio"
            name={data.title}
            checked={item.checked}
          />
        );
      })}
      <InputContainer>
        <FilterInput />
      </InputContainer>
    </Container>
  );
};
export default ThirdFilter;
