import styled from 'styled-components';

import UserItem from './UserItem';
import { usersData } from '../../mocks/Data';

const Container = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
`;

const UserList = () => {
  return (
    <Container>
      <Grid>
        {usersData.map((user, idx) => {
          return <UserItem key={idx} user={user} />;
        })}
      </Grid>
    </Container>
  );
};

export default UserList;
