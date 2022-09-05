import styled from 'styled-components';
import UserFilter from '../../components/user/UserFilter';
import UserTab from '../../components/user/UserTab';
import UserList from '../../components/user/UserList';
import UserSubTab from '../../components/user/UserSubTab';

const Container = styled.div`
  width: 100%;
  height: 100%;
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
    </Container>
  );
};

export default Users;
