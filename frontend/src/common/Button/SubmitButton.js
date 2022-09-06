/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MakeBtn = styled.button`
  width: ${({ width }) => (width ? width : '90px')};
  height: ${({ height }) => (height ? height : '30px')};
  color: ${({ color }) => (color ? color : '#2C5877')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#0995FF'};
  border: 1px solid
    ${({ borderColor }) => (borderColor ? borderColor : 'hsl(205deg 41% 63%)')};
  border-radius: 3px;
  margin: ${({ marginTD }) => (marginTD ? marginTD : '4px')};
  cursor: pointer;
  &:hover {
    background-color: ${({ hoverBackgroundColor }) =>
      hoverBackgroundColor ? hoverBackgroundColor : ''};
  }

  > .a-style {
    color: ${({ color }) => (color ? color : '#2C5877')};
  }
`;

const SubmitButton = ({ go, btnName, ...props }) => {
  return (
    <MakeBtn {...props}>
      <Link className="a-style" to={go} color={props.color}>
        {btnName}
      </Link>
    </MakeBtn>
  );
};

export default SubmitButton;
