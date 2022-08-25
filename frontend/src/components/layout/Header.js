import styled from 'styled-components';

const Head = styled.header`
  width: 100;
  height: 50px;
  border: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Header = () => {
  return (
    <Head>
      <div>여기는 Head 입니다</div>
    </Head>
  );
};

export default Header;
