/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ImEarth } from 'react-icons/im';

const NavList = styled(NavLink)`
  display: list-item;
  width: 100%;
  height: 30px;
  line-height: 2;
  font-size: 13px;
  padding: ${({ padding }) => (padding ? padding : '4px 4px 4px 30px')};
  display: flex;
  align-items: center;

  &:hover {
    color: black;
  }

  &.active {
    color: black;
    background-color: hsl(210, 8%, 95%);
    border-right: 4px solid #f48224;
    font-weight: 700;
  }
`;

const Text = styled.div`
  color: hsl(210, 8%, 35%);

  .icon {
    font-size: 14px;
    margin-left: 2px;
    margin-right: 6px;
  }
`;

const Public = styled.div`
  color: hsl(210, 8%, 45%);
  font-size: 11px;
  margin: 16px 0 6px 8px;
`;

const NavItem = ({ path, text, ...props }) => {
  return text === 'PUBLIC' ? (
    <Public>{text}</Public>
  ) : (
    <NavList to={path} {...props}>
      <Text>
        {text === 'Questions' && <ImEarth className="icon" />}
        {text}
      </Text>
    </NavList>
  );
};

export default NavItem;
