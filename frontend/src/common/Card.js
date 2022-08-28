/* eslint-disable react/prop-types */
import styled from 'styled-components';

const CardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : '40rem')};
  padding: ${({ padding }) => (padding ? padding : '16px')};
  margin: ${({ margin }) => (margin ? margin : '2rem auto')};
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  border-radius: 3px;
  background-color: white;
  border: 1px solid rgb(214, 217, 220);
`;

const Card = ({ children, ...props }) => {
  return <CardContainer {...props}>{children}</CardContainer>;
};

export default Card;
