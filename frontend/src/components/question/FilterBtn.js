import styled, { css } from 'styled-components';
import { MdFilterList } from 'react-icons/md';

const TabBlock = styled.button`
  display: flex;
  border: 0;
  border: 1px solid hsl(205, 41%, 63%);
  padding: 9px;
  text-align: center;
  font-size: 12px;
  background-color: hslhsl(205, 46%, 92%);
  color: hsl(205, 47%, 42%);
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: hsl(205, 57%, 81%);
  }

  /* ${(props) =>
    props.isClick &&
    css`
      background-color: hsl(205, 57%, 81%);
    `} */
`;

const FilterBtn = () => {
  return (
    <TabBlock>
      <MdFilterList />
      Filter
    </TabBlock>
  );
};

export default FilterBtn;
