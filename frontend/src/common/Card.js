/* eslint-disable react/prop-types */
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : '40rem')};
  padding: ${({ padding }) => (padding ? padding : '16px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  border-radius: 3px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'white'};
  border: 1px solid rgb(214, 217, 220);
`;

//0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);

const Card = ({ children, ...props }) => {
  return <CardContainer {...props}>{children}</CardContainer>;
};

export default Card;
