import styled from 'styled-components';

const SidBar = styled.div`
  height: 40%;
  margin-right: 48px;

  h1 {
    font-size: 27px;
    margin-bottom: 32px;
  }

  div {
    margin-bottom: 24px;
  }

  @media (max-width: 820px) {
    display: none;
  }
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
