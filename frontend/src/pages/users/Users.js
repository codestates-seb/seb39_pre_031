import styled from 'styled-components';
import UserFilter from '../../components/user/UserFilter';
import UserTab from '../../components/user/UserTab';
import UserList from '../../components/user/UserList';
import UserSubTab from '../../components/user/UserSubTab';
import Paging from '../../common/Paging';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Headline = styled.div`
  font-size: 1.5rem;
  margin-bottom: 24px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SubContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;

const InputBlock = styled.div`
  margin-bottom: 12px;
`;

const TabBlock = styled.div`
  margin-bottom: 12px;
  margin-left: auto !important;
`;

const Pagination = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
`;

const Users = () => {
  return (
    <Container>
      <Headline>Users</Headline>
      <TopContainer>
        <InputBlock>
          <UserFilter />
        </InputBlock>
        <TabBlock>
          <UserTab />
        </TabBlock>
      </TopContainer>
      <SubContainer>
        <UserSubTab />
      </SubContainer>
      <UserList />
      <Pagination>
        <Paging />
      </Pagination>
    </Container>
  );
};

export default Users;
