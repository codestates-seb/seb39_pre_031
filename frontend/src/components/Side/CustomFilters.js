import Card from '../../common/Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FilterHeader = styled.div`
  width: 100%;
  padding: 12px 15px;
  font-size: 15px;
  background-color: #f8f9f9;
`;

const FilterContent = styled.div`
  width: 100%;
  padding: 16px 15px;
  > a {
    color: #3e94f8;
    font-size: 13px;
  }
`;

const CustomFilter = () => {
  return (
    <Card width="100%" margin="0 0 16px 0" padding="0">
      <FilterHeader>Custom Filters</FilterHeader>
      <FilterContent>
        <Link to="/questions">Create a custom filter</Link>
      </FilterContent>
    </Card>
  );
};

export default CustomFilter;
