import styled from 'styled-components';

const Nav = styled.nav`
  height: 100%;
  width: 164px;
  border: 1px solid black;
  position: fixed;
  top: 50px;
`;

const LeftSide = () => {
  return (
    <Nav>
      <div>여기는 Nav 입니다</div>
    </Nav>
  );
};

export default LeftSide;
