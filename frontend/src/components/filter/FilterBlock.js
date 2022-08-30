import styled from 'styled-components';
import FilterItem from './FilterItem';

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

const FilterBlock = ({ data, type }) => {
  const { title, items } = data;

  return (
    <Container>
      <Title>{title}</Title>
      {items.map((item, idx) => {
        return (
          <FilterItem
            key={idx}
            text={item.label}
            type={type}
            name={title}
            checked={item.checked}
          />
        );
      })}
    </Container>
  );
};

export default FilterBlock;
