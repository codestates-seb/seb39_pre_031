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

const FilterItem = ({ text, type, name, setNoAns, setNoSel, onTab }) => {
  const onClickHandler = (e) => {
    const target = e.target.nextElementSibling.textContent;
    if (target === 'No answers') {
      setNoAns((res) => !res);
    }
    if (target === 'No accepted answer') {
      setNoSel((res) => !res);
    }
    if (
      target === 'Newest' ||
      target === 'Recent activity' ||
      target === 'Highes score' ||
      target === 'Most frequent'
    ) {
      onTab(target);
    }
  };
  return (
    <Container>
      <Checkbox type={type} id={text} name={name} onClick={onClickHandler} />
      <Label htmlFor={text}>{text}</Label>
    </Container>
  );
};

export default FilterItem;
