import { useState } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const Nav = styled.nav`
  height: 100%;
  width: 164px;
  position: fixed;
  top: 50px;
`;

const NavMenu = styled.ol`
  list-style: none;
  padding-top: 24px;
`;

const LeftSide = () => {
  const [isActive, setIsActive] = useState('');

  const menus = [
    {
      text: 'Home',
      path: '/',
      padding: '0 0 0 0.5rem',
    },
    {
      text: 'PUBLIC',
      height: '10px',
      fontSize: '10px',
      color: 'hsl(210, 8%, 25%)',
      padding: '1.2rem 0 0.8rem 0.5rem',
      cursor: 'help',
      pointerEvents: 'none',
    },
    {
      text: 'Questions',
      path: '/questions',
      padding: '0 0 0 0.6rem',
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
              width={menu.width}
              height={menu.height}
              padding={menu.padding}
              fontSize={menu.fontSize}
              color={menu.color}
              pointerEvents={menu.pointerEvents}
              cursor={menu.cursor}
              onClick={() => setIsActive(idx)}
              isClick={isActive === idx ? true : false}
            />
          );
        })}
      </NavMenu>
    </Nav>
  );
};

export default LeftSide;
