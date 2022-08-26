/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginBtn = styled.button`
  width: ${({ width }) => (width ? width : '90px')};
  height: ${({ height }) => (height ? height : '30px')};
  color: ${({ color }) => (color ? color : 'black')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#3F94F8'};
  border: 1px solid
    ${({ borderColor }) => (borderColor ? borderColor : 'hsl(205,36%,53%)')};
  border-radius: 3px;
`;

//! props : width, backgroundColor, link, color
const SubmitButton = ({ go, text, ...props }) => {
  return (
    <Link to={go}>
      <LoginBtn {...props}>{text}</LoginBtn>
    </Link>
  );
};

export default SubmitButton;
