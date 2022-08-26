import { useState } from 'react';
import styled from 'styled-components';
import NavItem from '../../common/NavItem';

const Nav = styled.nav`
  height: 100%;
  width: 164px;
  border: 1px soLid black;
  position: fixed;
  top: 50px;
`;

const NavMenu = styled.ol`
  list-style: none;
  padding: 0;
  padding-top: 0.1rem;
`;

const LeftSide = () => {
  const [isActive, setIsActive] = useState('');

  const menus = [
    {
      text: 'Home',
      path: '/',
      width: '153px',
      padding: '0 0 0 0.5rem',
    },
    {
      text: 'PUBLIC',
      height: '10px',
      fontSize: '10px',
      color: 'hsl(210, 8%, 25%)',
      padding: '1.2rem 0 0.4rem 0.5rem',
      cursor: 'help',
      pointerEvents: 'none',
    },
    {
      text: 'Questions',
      path: '/questions',
      padding: '0 0 0 0.6rem',
      width: '152px',
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
