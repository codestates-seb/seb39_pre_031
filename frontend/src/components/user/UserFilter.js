import Input from '../../common/Input';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  .searchIcon {
    font-size: 20px;
    color: hsl(210, 8%, 60%);
    position: absolute;
    right: auto;
    left: 0.4em;
    top: 47%;
    margin-top: -9px;
    pointer-events: none;
  }
`;

const UserFilter = () => {
  return (
    <Container>
      <Input
        margin="0"
        padding="8px 9px 8px 32px"
        placeholder="Filter by user"
      />
      <BiSearch className="searchIcon" />
    </Container>
  );
};

export default UserFilter;
