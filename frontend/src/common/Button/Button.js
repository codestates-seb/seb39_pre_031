/* eslint-disable react/prop-types */
import styled from 'styled-components';

const BtnContainer = styled.button`
  width: ${({ width }) => width};
  font-size: 12px;
  color: ${({ color }) => (color ? color : 'white')};
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : 'hsl(206,100%,52%)'};
  border: 1px solid ${({ border }) => (border ? border : 'transparent')};
  border-radius: 3px;
  padding: 10px;
  margin: 0 2px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);

  &:hover {
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor ? hoverBgColor : 'hsl(206,100%,40%)'};
  }

  &:active {
    background-color: ${({ activeBgColor }) =>
      activeBgColor ? activeBgColor : 'hsl(209,100%,37.5%)'};
  }
`;

const Button = ({ btnName, ...props }) => {
  return <BtnContainer {...props}>{btnName}</BtnContainer>;
};

export default Button;
