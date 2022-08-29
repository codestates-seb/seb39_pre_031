import styled from 'styled-components';

const SidBar = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 1rem;
`;

const LeftSideBar = () => {
  return (
    <SidBar>
      <h1>Join the Stack Overflow community</h1>
      <div className="left-information">
        <span>Get unstuck — ask a question</span>
      </div>
      <div className="left-information">
        <span>Unlock new privileges like voting and commenting</span>
      </div>
      <div className="left-information">
        <span>Save your favorite tags, filters, and jobs</span>
      </div>
      <div className="left-information">
        <span>Earn reputation and badges</span>
      </div>

      <div></div>
    </SidBar>
  );
};

export default LeftSideBar;
