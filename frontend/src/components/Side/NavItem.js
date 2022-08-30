/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ImEarth } from 'react-icons/im';

const NavList = styled.li`
  width: ${({ width }) => (width ? width : '139px')};
  height: ${({ height }) => (height ? height : '33px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.8rem')};
  color: ${({ color }) => (color ? color : 'hsl(210, 8%, 25%)')};
  padding: ${({ padding }) => (padding ? padding : '0 0 0 29px')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'pointer')};
  display: flex;
  align-items: center;
  pointer-events: ${({ pointerEvents }) =>
    pointerEvents ? pointerEvents : 'auto'};

  .icon {
    font-size: 14px;
    margin-right: 0.3rem;
  }

  &:hover {
    color: black;
  }

  ${(props) =>
    props.isClick &&
    css`
      color: black;
      width: ${({ width }) => (width ? width : '132px')};
      background-color: hsl(210, 8%, 95%);
      border-right: 4px solid #f48224;
      font-weight: 700;

      &:hover {
        font-weight: 700;
      }
    `}
`;

const NavItem = ({ path, text, ...props }) => {
  return text === 'PUBLIC' ? (
    <NavList {...props}>
      {text === 'Questions' && <ImEarth className="icon" />}
      {text}
    </NavList>
  ) : (
    <Link to={path}>
      <NavList {...props}>
        {text === 'Questions' && <ImEarth className="icon" />}
        {text}
      </NavList>
    </Link>
  );
};

export default NavItem;
