import styled from 'styled-components';
import { MdFilterList } from 'react-icons/md';

const Button = styled.button`
  display: flex;
  border: 0;
  border: 1px solid hsl(205, 41%, 63%);
  padding: 9px;
  margin-left: 10px;
  text-align: center;
  font-size: 12px;
  background-color: hsl(205, 46%, 92%);
  color: hsl(205, 47%, 42%);
  cursor: pointer;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);

  &:hover {
    background-color: hsl(205, 57%, 81%);
  }
`;

const FilterBtn = ({ ...props }) => {
  return (
    <Button {...props}>
      <MdFilterList />
      Filter
    </Button>
  );
};

export default FilterBtn;
