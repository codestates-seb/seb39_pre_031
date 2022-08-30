import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';

const Tage = styled.div`
  background-color: #e1ecf4;
  margin: 2px 2px 6px 0;
  padding: 5px 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #2c5877;
  border-radius: 3px;
`;

const Tages = ({ text, id, onClick }) => {
  return (
    <Tage id={id}>
      {text}
      <TiDelete
        id={id}
        display="block"
        color="#C8CBCF"
        fontSize="18px"
        onMouseOver={({ target }) => (target.style.color = '#C91C2E')}
        onMouseOut={({ target }) => (target.style.color = 'C8CBCF')}
        cursor="pointer"
        onClick={onClick}
      />
    </Tage>
  );
};

export default Tages;
