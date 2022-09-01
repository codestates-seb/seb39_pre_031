import styled from 'styled-components';
import NavItem from './NavItem';

const Nav = styled.nav`
  display: block;
  min-width: 9rem;
  margin-bottom: 8px;
  width: auto;
  border-right: 1px solid hsl(210, 8%, 85%);
`;

const NavMenu = styled.div`
  position: sticky;
  padding-top: 24px;
  top: 50px;
`;

const LeftSide = () => {
  const menus = [
    {
      text: 'Home',
      path: '/',
      padding: '4px 4px 4px 8px',
    },
    {
      text: 'PUBLIC',
    },
    {
      text: 'Questions',
      path: '/questions',
      padding: '8px 6px 8px 8px',
    },
    { text: 'Tags', path: '/tags' },
    { text: 'Users', path: '/users' },
  ];

  return (
    <Nav>
      <NavMenu>
        {menus.map((menu, idx) => {
          return (
            <NavItem
              path={menu.path}
              text={menu.text}
              key={idx}
              padding={menu.padding}
            />
          );
        })}
      </NavMenu>
    </Nav>
  );
};

export default LeftSide;
