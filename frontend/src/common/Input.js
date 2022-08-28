/* eslint-disable react/prop-types */
import styled from 'styled-components';

const InputContainer = styled.input`
  width: 100%;
  margin: ${({ margin }) => (margin ? margin : '0 0 1rem 0')};
  padding: 0.6em 0.7em;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;

  ::placeholder {
    color: hsl(210, 8%, 75%);
  }

  &:focus {
    outline: none;
    border-color: hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 3px hsl(205, 53%, 88%);
  }
`;

const Input = ({ text, ...props }) => {
  return <InputContainer {...props} placeholder={text} />;
};

export default Input;
