import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 4px 0;
`;

const Checkbox = styled.input`
  border: 1.5px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  background: white;
  width: 1em;
  height: 1em;
`;

const Label = styled.label`
  margin: 0 2px;
  padding: 0 2px;
  cursor: pointer;
  font-weight: 400;
  color: hsl(210, 8%, 5%);
  font-size: 14px;
`;

const FilterItem = ({ text, type, name, checked }) => {
  return (
    <Container>
      <Checkbox type={type} id={text} name={name} checked={checked} />
      <Label htmlFor={text}>{text}</Label>
    </Container>
  );
};

export default FilterItem;
