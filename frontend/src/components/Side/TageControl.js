import { useRef, useState } from 'react';
import styled from 'styled-components';
import ButtonStyle from '../../common/Button/ButtonStyle';
import Tages from '../../common/Tages';
import { v4 as uuidv4 } from 'uuid';

const TageContainer = styled.div`
  width: 100%;
`;

const TageController = styled.div`
  padding: 4px 0;
  display: flex;
  flex-wrap: wrap;
`;

const TageInput = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  > input {
    display: block;
    width: 80%;
    height: 100%;
    padding: 10px 9px;
    border-top-right-radius: 0;
    border-top-left-radius: 3px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 3px;
    border: 1px solid #d6d9dc;
    font-size: 14px;
  }
  > input:focus {
    outline: 5px solid #ddeaf7;
    border: 1px solid #0995ff;
  }
`;

const TageControl = () => {
  const [tageName, setTageName] = useState([]);
  const [tages, setTages] = useState([]);
  const inputRef = useRef(null);

  //* Tage 생성
  const tageSubmitHandler = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;

    const newTage = {
      id: uuidv4(),
      text: inputValue,
    };

    if (inputValue === '') {
      inputRef.current.focus();
    }

    if (inputValue) {
      if (tageName.includes(inputValue)) {
        inputRef.current.value = '';
      }
      if (!tageName.includes(inputValue)) {
        setTages([newTage, ...tages]);
        setTageName([inputValue, ...tageName]);
        inputRef.current.value = '';
      }
    }
  };

  const tageDeleteHandler = (e) => {
    const targetText = e.target.parentElement.parentElement.textContent;
    const targetID = e.target.parentElement.parentElement.id;

    setTages(
      tages.filter((tage) => {
        return tage.id !== targetID;
      })
    );
    setTageName(
      tageName.filter((tage) => {
        return tage !== targetText;
      })
    );
  };

  return (
    <TageContainer>
      <TageController>
        {tages.map((tage) => {
          return (
            <Tages
              key={tage.id}
              id={tage.id}
              text={tage.text}
              onClick={tageDeleteHandler}
            />
          );
        })}
      </TageController>
      <TageInput onSubmit={tageSubmitHandler}>
        <input type="text" ref={inputRef} />
        <ButtonStyle
          width="20%"
          height="70%"
          borderRadius="0"
          borderTR="3px"
          borderBR="3px"
          hoverBackgroundColor="#0074CC"
          color="white"
          type="submit"
        >
          Add
        </ButtonStyle>
      </TageInput>
    </TageContainer>
  );
};

export default TageControl;
