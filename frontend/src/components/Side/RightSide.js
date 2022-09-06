import styled from 'styled-components';
import CustomFilter from './CustomFilters';
import IgnoredTags from './IgnoredTags';
import SideBlock from './SideBlock';
import WatchedTags from './WatchedTags';

const Sidebar = styled.div`
  height: 100%;
  width: 27%;
  margin-left: 24px;

  @media (max-width: 980px) {
    display: none;
  }
`;

const RightSide = () => {
  return (
    <Sidebar>
      <SideBlock />
      <CustomFilter />
      <WatchedTags />
      <IgnoredTags />
    </Sidebar>
  );
};

export default RightSide;
